import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function InteractiveFloatingSphere() {
  const meshRef = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Monitor mouse movements to create parallax shifting
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize values between -1 and 1
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Smoothly interpolate rotation
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;

      // Parallax lerp positioning
      const targetX = mouse.x * 1.5;
      const targetY = mouse.y * 1.2;
      
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.6, 128, 128]} position={[0, 0, -2.5]}>
      <MeshDistortMaterial
        color="#0891b2" // Sleek cyan
        attach="material"
        distort={0.45}
        speed={1.6}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
        opacity={0.12}
        transparent={true}
      />
    </Sphere>
  );
}

const ThreeDBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden bg-slate-950">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 grid-mesh opacity-[0.05] pointer-events-none" />
      
      {/* Ambient Blurred Gradients */}
      <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/10 blur-[130px] pulse-bg pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] rounded-full bg-indigo-500/10 blur-[130px] pulse-bg pointer-events-none" />
      
      {/* 3D Wireframe Canvas */}
      <Canvas 
        className="w-full h-full"
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <InteractiveFloatingSphere />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
