# Builds the chibi "mini Hager" hero character and exports public/models/hager.glb.
# Run:  /Applications/Blender.app/Contents/MacOS/Blender -b -P scripts/build_hager.py -- [preview.png]
import math
import os
import sys

import bpy
from mathutils import Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'public', 'models', 'hager.glb')
PREVIEW = sys.argv[sys.argv.index('--') + 1] if '--' in sys.argv and len(sys.argv) > sys.argv.index('--') + 1 else None

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.render.fps = 30
scene.frame_start, scene.frame_end = 1, 121

# ---------- materials ----------
def mat(name, hex_color, rough=0.55):
    h = hex_color.lstrip('#')
    rgb = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    lin = [c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4 for c in rgb]
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*lin, 1)
    b.inputs['Roughness'].default_value = rough
    m.diffuse_color = (*lin, 1)
    return m

SKIN = mat('skin', '#e0a47e')
HIJAB = mat('hijab', '#cdb4e6')
HIJAB_D = mat('hijab_dark', '#b497d4')
DARK = mat('dark', '#2a2340')
CAP = mat('cap', '#1d1030')
GOLD = mat('gold', '#f0b84a', 0.35)
PINK = mat('pink', '#f2a3c1')
BLUSH = mat('blush', '#ef8fa8')
WHITE = mat('white', '#fbf5ff')
LAPEL = mat('lapel', '#3d3560')
EYE = mat('eye', '#1d1030', 0.25)

# ---------- helpers ----------
def finish(o, m):
    o.data.materials.append(m)
    for p in o.data.polygons:
        p.use_smooth = True
    return o

def sphere(name, loc, scale, m, seg=32):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=seg, ring_count=seg // 2, radius=1, location=loc)
    o = bpy.context.object
    o.name, o.scale = name, scale
    return finish(o, m)

def cyl(name, loc, r, h, m, rot=(0, 0, 0), verts=24):
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts, radius=r, depth=h, location=loc, rotation=rot)
    o = bpy.context.object
    o.name = name
    return finish(o, m)

def box(name, loc, size, m, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot)
    o = bpy.context.object
    o.name, o.scale = name, size
    return finish(o, m)

def empty(name, loc):
    o = bpy.data.objects.new(name, None)
    o.location = loc
    scene.collection.objects.link(o)
    return o

def parent(child, p):
    bpy.context.view_layer.update()
    child.parent = p
    child.matrix_parent_inverse = p.matrix_world.inverted()

root = empty('Hager', (0, 0, 0))
head = empty('HeadPivot', (0, 0, 1.0))
arm_r = empty('ArmPivotR', (0.5, 0, 0.92))   # +X side (viewer's right)
arm_l = empty('ArmPivotL', (-0.5, 0, 0.92))
parent(head, root); parent(arm_r, root); parent(arm_l, root)

def blazer():
    bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, 0.6))
    o = bpy.context.object
    o.name, o.scale = 'blazer', (0.88, 0.56, 0.76)
    bv = o.modifiers.new('bevel', 'BEVEL')
    bv.width, bv.segments = 0.09, 5
    bpy.ops.object.modifier_apply(modifier='bevel')
    return finish(o, DARK)

def drape_cone():
    bpy.ops.mesh.primitive_cone_add(vertices=48, radius1=0.38, radius2=0.3, depth=0.5, location=(0, 0, 1.02))
    o = bpy.context.object
    o.name, o.scale = 'drape', (1, 0.62, 1)
    return finish(o, HIJAB)

# ---------- body (faces -Y) ----------
parts_root = [
    blazer(),
    box('drape_front', (0, -0.272, 0.8), (0.17, 0.03, 0.36), HIJAB),
    box('lapel_l', (-0.1, -0.292, 0.77), (0.1, 0.03, 0.44), LAPEL, rot=(0, math.radians(-14), 0)),
    box('lapel_r', (0.1, -0.292, 0.77), (0.1, 0.03, 0.44), LAPEL, rot=(0, math.radians(14), 0)),
    sphere('button_1', (0, -0.3, 0.5), (0.032, 0.02, 0.032), GOLD, 12),
    sphere('button_2', (0, -0.3, 0.36), (0.032, 0.02, 0.032), GOLD, 12),
    drape_cone(),
    cyl('leg_l', (-0.17, 0, 0.2), 0.13, 0.4, DARK),
    cyl('leg_r', (0.17, 0, 0.2), 0.13, 0.4, DARK),
    sphere('shoe_l', (-0.17, -0.07, 0.07), (0.16, 0.24, 0.1), WHITE),
    sphere('shoe_r', (0.17, -0.07, 0.07), (0.16, 0.24, 0.1), WHITE),
]
for o in parts_root:
    parent(o, root)

# ---------- arms ----------
for pivot, side in ((arm_r, 1), (arm_l, -1)):
    x = pivot.location.x
    sleeve = cyl(f'sleeve_{side}', (x + side * 0.03, 0, 0.7), 0.1, 0.46, DARK)
    hand = sphere(f'hand_{side}', (x + side * 0.03, 0, 0.45), (0.11, 0.11, 0.11), SKIN)
    parent(sleeve, pivot); parent(hand, pivot)

# ---------- head ----------
HC = Vector((0, 0.0, 1.58))
hijab_s = Vector((0.7, 0.64, 0.73))
face_c = Vector((0, -0.3, 1.55))
face_s = Vector((0.48, 0.4, 0.56))

def face_y(x, z):
    t = 1 - (x / face_s.x) ** 2 - ((z - face_c.z) / face_s.z) ** 2
    return face_c.y - face_s.y * math.sqrt(max(t, 0))

head_parts = [
    sphere('hijab', (HC.x, HC.y + 0.03, HC.z), hijab_s, HIJAB, 48),
    sphere('hijab_back', (0, 0.22, 1.32), (0.58, 0.42, 0.62), HIJAB_D, 32),
    sphere('hijab_neck', (0, -0.02, 1.08), (0.46, 0.4, 0.3), HIJAB, 32),
    sphere('face', face_c, face_s, SKIN, 48),
]
# soft rim of fabric framing the face
bpy.ops.mesh.primitive_torus_add(major_radius=1, minor_radius=0.055, major_segments=48, minor_segments=16,
                                 location=(0, -0.55, 1.55), rotation=(math.radians(90), 0, 0))
rim = bpy.context.object
rim.name, rim.scale = 'face_rim', (0.47, 0.5, 0.57)
head_parts.append(finish(rim, HIJAB))

eyes = []
for s in (-1, 1):
    x, z = 0.2 * s, 1.58
    e = sphere(f'eye_{s}', (x, face_y(x, z) + 0.01, z), (0.055, 0.03, 0.08), EYE, 16)
    eyes.append(e)
    c = sphere(f'cheek_{s}', (0.3 * s, face_y(0.3 * s, 1.43) + 0.0, 1.43), (0.09, 0.03, 0.055), BLUSH, 16)
    head_parts += [e, c]

# smile: arc curve, bevelled into a tube
cd = bpy.data.curves.new('smile', 'CURVE')
cd.dimensions = '3D'
cd.bevel_depth = 0.014
sp = cd.splines.new('POLY')
N = 11
sp.points.add(N - 1)
for i in range(N):
    t = i / (N - 1) * 2 - 1
    x = 0.15 * t
    z = 1.38 + 0.05 * t * t * -1 + 0.0
    z = 1.41 - 0.07 * (1 - t * t)
    sp.points[i].co = (x, face_y(x, z) - 0.003, z, 1)
smile_obj = bpy.data.objects.new('smile', cd)
scene.collection.objects.link(smile_obj)
bpy.context.view_layer.objects.active = smile_obj
smile_obj.select_set(True)
bpy.ops.object.convert(target='MESH')
smile = bpy.context.object
finish(smile, EYE)
head_parts.append(smile)

# graduation cap, tilted a little like in the photo
cap_tilt = (math.radians(-6), math.radians(7), math.radians(-12))
head_parts += [
    cyl('cap_base', (0, 0.0, 2.1), 0.46, 0.28, CAP),
    box('cap_board', (0, 0.0, 2.26), (1.12, 1.12, 0.06), CAP, rot=cap_tilt),
    sphere('cap_button', (0, 0.0, 2.3), (0.06, 0.06, 0.04), GOLD, 12),
]
for o in head_parts:
    parent(o, head)

# tassel: pivot at the board's corner so it swings
tassel_pivot = empty('TasselPivot', (0.5, -0.08, 2.28))
parent(tassel_pivot, head)
cord = cyl('tassel_cord', (0.5, -0.08, 2.16), 0.012, 0.25, GOLD, verts=8)
tuft = cyl('tassel_tuft', (0.5, -0.08, 1.98), 0.045, 0.14, GOLD, verts=12)
for o in (cord, tuft):
    parent(o, tassel_pivot)

# ---------- animation (4 s loop @30 fps, frame 121 == frame 1) ----------
def key(obj, path, idx, pairs):
    for f, v in pairs:
        if idx is None:
            setattr(obj, path, v)
            obj.keyframe_insert(path, frame=f)
        else:
            cur = list(getattr(obj, path))
            cur[idx] = v
            setattr(obj, path, cur)
            obj.keyframe_insert(path, index=idx, frame=f)

F = [1, 31, 61, 91, 121]
d = math.radians
key(root, 'location', 2, [(1, 0), (31, 0.06), (61, 0), (91, 0.06), (121, 0)])
key(head, 'rotation_euler', 2, [(1, d(-4)), (31, d(4)), (61, d(-4)), (91, d(4)), (121, d(-4))])
key(head, 'rotation_euler', 0, [(1, 0), (31, d(2)), (61, 0), (91, d(2)), (121, 0)])
# wave: raise the +X arm, then swing it
wave = [(1, -15), (14, -115), (22, -140), (30, -105), (38, -140), (46, -105), (54, -140), (62, -115), (80, -15), (121, -15)]
key(arm_r, 'rotation_euler', 1, [(f, d(a)) for f, a in wave])
key(arm_r, 'rotation_euler', 0, [(1, 0), (121, 0)])
key(arm_l, 'rotation_euler', 1, [(1, d(6)), (61, d(12)), (121, d(6))])
key(tassel_pivot, 'rotation_euler', 1, [(1, d(-14)), (31, d(14)), (61, d(-14)), (91, d(14)), (121, d(-14))])
for e in eyes:  # blinks
    key(e, 'scale', 2, [(1, 0.08), (50, 0.08), (53, 0.008), (56, 0.08), (100, 0.08), (103, 0.008), (106, 0.08), (121, 0.08)])
for o in bpy.data.objects:
    ad = o.animation_data
    if ad and ad.action:
        for fc in ad.action.layers[0].strips[0].channelbags[0].fcurves if hasattr(ad.action, 'layers') else ad.action.fcurves:
            for kp in fc.keyframe_points:
                kp.interpolation = 'BEZIER'

# ---------- export ----------
os.makedirs(os.path.dirname(OUT), exist_ok=True)
bpy.ops.export_scene.gltf(filepath=OUT, export_format='GLB', export_animations=True,
                          export_animation_mode='SCENE', export_apply=True)
print('EXPORTED', OUT, os.path.getsize(OUT))

# ---------- optional preview render ----------
if PREVIEW:
    scene.render.engine = 'BLENDER_WORKBENCH'
    scene.display.shading.light = 'STUDIO'
    scene.display.shading.color_type = 'MATERIAL'
    scene.render.resolution_x, scene.render.resolution_y = 700, 900
    scene.render.film_transparent = False
    scene.frame_set(30)
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam'))
    scene.collection.objects.link(cam)
    cam.location = (0.2, -6.2, 1.5)
    cam.rotation_euler = (math.radians(90), 0, 0)
    cam.data.lens = 55
    scene.camera = cam
    scene.render.filepath = PREVIEW
    bpy.ops.render.render(write_still=True)
