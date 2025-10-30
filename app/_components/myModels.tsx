"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function MyModel() {
  const group = useRef<THREE.Group>(null!);
  const { scene } = useGLTF("/models/cool_guy.glb");

  // optional animation
  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.5;
  });

  // 🦴 Add skeleton helper once the model loads
  useEffect(() => {
    if (!scene) return;

    const helper = new THREE.SkeletonHelper(scene);
    scene.add(helper);

    // optional: set color for visibility
    (helper.material as THREE.LineBasicMaterial).color.set(0xff0000);

    // cleanup on unmount
    return () => {
      scene.remove(helper);
      helper.dispose();
    };
  }, [scene]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.5} // adjust size
      position={[0, -1, 0]} // adjust placement
    />
  );
}
