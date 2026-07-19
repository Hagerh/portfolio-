import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

// The floating, gently-morphing 3D shape in the hero section.
// Swap the <sphereGeometry>/<MeshDistortMaterial> pair for a loaded .glb model later via useGLTF.
function Blob() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh>
        <sphereGeometry args={[1.4, 64, 64]} />
        <MeshDistortMaterial
          color="#e85f96"
          distort={0.45}
          speed={1.8}
          roughness={0.15}
          metalness={0.2}
        />
      </mesh>
    </Float>
  );
}

const HeroCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-3, -2, -2]} intensity={0.8} color="#7c5aa6" />
        <Blob />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;
