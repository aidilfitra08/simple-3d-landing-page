"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function Box() {
  const meshRef = useRef<THREE.Mesh>(null!);

  // 🔁 Animation loop
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.8;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {/* Box geometry */}
      <boxGeometry args={[2, 2, 2]} />

      {/* Material with shading */}
      <meshStandardMaterial color="#4FD1C5" metalness={0.3} roughness={0.6} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }}>
        {/* 💡 Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* 🧱 The box */}
        <Box />

        {/* 🌅 Environment lighting */}
        <Environment preset="sunset" />

        {/* 🎮 Orbit camera controls */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
