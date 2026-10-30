import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, useAnimations, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const MODEL_URL = '/models/hager.glb';

// Mini Hager: modelled and animated in Blender (scripts/build_hager.py), looping idle + wave.
function Hager() {
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    // Blender exports one clip per animated part (body, arm, head, eyes, tassel); play them together.
    const playing = names.map((n) => actions[n]).filter(Boolean);
    playing.forEach((a) => a.reset().fadeIn(0.4).play());
    return () => playing.forEach((a) => a.fadeOut(0.2));
  }, [actions, names]);

  // Always faces the camera; only the baked animation moves her.
  return (
    <group position={[0, -1.2, 0]} scale={1.05}>
      <primitive object={scene} />
    </group>
  );
}

const HeroCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0.1, 6.2], fov: 35 }}
      onCreated={({ camera }) => camera.lookAt(0, 0.1, 0)}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 4]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-3, 1, 2]} intensity={12} color="#f2a3c1" />
        <Hager />
        <ContactShadows position={[0, -1.2, 0]} opacity={0.35} scale={5} blur={2.5} far={2} color="#4f3378" />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload(MODEL_URL);

export default HeroCanvas;
