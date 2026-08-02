import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function InteractiveFloatingSphere() {
  const meshRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  // Store mouse coordinates in a ref to avoid triggering React re-renders on every mouse move
  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        mouseRef.current = {
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1,
        };
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;

      const targetX = mouseRef.current.x * 1.2;
      const targetY = mouseRef.current.y * 0.9;

      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.04;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.04;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 48, 48]} position={[0, 0, -2.5]}>
      <MeshDistortMaterial
        color="#0891b2"
        attach="material"
        distort={0.4}
        speed={1.4}
        roughness={0.25}
        metalness={0.7}
        wireframe={true}
        opacity={0.12}
        transparent={true}
      />
    </Sphere>
  );
}

const ThreeDBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden bg-slate-950 transform-gpu">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 grid-mesh opacity-[0.04] pointer-events-none" />
      
      {/* Ambient Hardware-Accelerated Gradients */}
      <div className="absolute top-[10%] left-[5%] w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-[10%] right-[5%] w-[25rem] h-[25rem] rounded-full bg-indigo-500/10 blur-[90px] pointer-events-none transform-gpu" />
      
      {/* Optimized 3D Canvas */}
      <Canvas 
        className="w-full h-full pointer-events-none"
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.0} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8b5cf6" />
        <InteractiveFloatingSphere />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
