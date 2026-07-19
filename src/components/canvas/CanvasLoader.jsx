import { Html, useProgress } from '@react-three/drei';

// Shown inside a <Suspense> boundary while a 3D scene's assets are still loading.
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="canvas-loader" />
      <p className="mt-2 text-sm font-semibold text-blossom-500">
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
