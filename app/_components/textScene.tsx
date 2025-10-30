"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls, FontLoader, TextGeometry } from "three-stdlib";

export default function TextScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 4);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Load font
    const loader = new FontLoader();

    loader.load("/fonts/Bold_Love_Regular.json", (font) => {
      // Create text geometry
      const textGeo = new TextGeometry("Hello Bold Love!", {
        font,
        size: 1,
        height: 0.3,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
      } as any);

      textGeo.center(); // center the text

      const textMat = new THREE.MeshStandardMaterial({
        color: 0xff8844,
        metalness: 0.6,
        roughness: 0.3,
      });

      const textMesh = new THREE.Mesh(textGeo, textMat);
      textMesh.castShadow = true;
      scene.add(textMesh);

      // Animate rotation
      const animate = () => {
        textMesh.rotation.y += 0.01;
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      animate();
    });

    // Handle resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen" />;
}
