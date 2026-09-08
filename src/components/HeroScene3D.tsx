import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll } from '../context/ScrollContext';
import { useTheme } from '../context/ThemeContext';

export const HeroScene3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollProgress, scrollVelocity } = useScroll();
  const { isDark } = useTheme();

  const scrollProgressRef = useRef(scrollProgress);
  const scrollVelocityRef = useRef(scrollVelocity);
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
    scrollVelocityRef.current = scrollVelocity;
    isDarkRef.current = isDark;
  }, [scrollProgress, scrollVelocity, isDark]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main Brain / Neural Core Group
    const brainGroup = new THREE.Group();
    scene.add(brainGroup);

    // Orbit Ring Group for futuristic holographic depth
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const ringGeometry = new THREE.TorusGeometry(8.5, 0.03, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.22,
    });
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(10.2, 0.02, 16, 100), new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.18,
    }));
    ring2.rotation.y = Math.PI / 4;
    ringGroup.add(ring2);

    // Generate neural network nodes
    const nodeCount = 68;
    const nodeGeometry = new THREE.SphereGeometry(0.14, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x60a5fa });

    const nodes: THREE.Vector3[] = [];
    const nodeMeshes: THREE.Mesh[] = [];
    const radius = 6.4;

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const jitter = (Math.random() - 0.5) * 1.4;
      const r = radius + jitter;

      const pos = new THREE.Vector3(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
      nodes.push(pos);

      const sphere = new THREE.Mesh(nodeGeometry, nodeMaterial);
      sphere.position.copy(pos);
      brainGroup.add(sphere);
      nodeMeshes.push(sphere);
    }

    // Connect close nodes with electric glowing lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.32,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 3.9) {
          linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    brainGroup.add(lineMesh);

    // Surrounding ambient particle dust
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 36;
      particlePositions[i + 1] = (Math.random() - 0.5) * 28;
      particlePositions[i + 2] = (Math.random() - 0.5) * 24;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.14,
      transparent: true,
      opacity: 0.55,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Mouse movement parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = (y / rect.height) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      const scrollProg = scrollProgressRef.current;
      const scrollVel = scrollVelocityRef.current;
      const dark = isDarkRef.current;

      // Color scheme adaptation
      nodeMaterial.color.setHex(dark ? 0x60a5fa : 0x2563eb);
      lineMaterial.color.setHex(dark ? 0x3b82f6 : 0x0284c7);

      // Smooth mouse easing
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // React to scroll velocity: rapid scroll adds kinetic spin
      const velocityKick = Math.min(Math.abs(scrollVel) * 0.08, 0.4);

      // Scroll-driven rotations and perspective transformations
      const scrollRotationY = scrollProg * Math.PI * 2.5;
      const scrollRotationX = Math.sin(scrollProg * Math.PI) * 0.5;

      brainGroup.rotation.y = elapsed * 0.15 + mouseX * 0.6 + scrollRotationY + velocityKick;
      brainGroup.rotation.x = Math.sin(elapsed * 0.1) * 0.12 + mouseY * 0.4 + scrollRotationX;
      brainGroup.rotation.z = Math.cos(elapsed * 0.08) * 0.08 + scrollProg * 0.8;

      // Subtle dynamic breathing scale with scroll
      const scaleFactor = Math.max(0.7, 1 - scrollProg * 0.4 + Math.sin(elapsed * 1.5) * 0.03);
      brainGroup.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Camera parallax depth shifts
      camera.position.z = 18 - scrollProg * 6.5 + Math.abs(scrollVel) * 0.2;
      camera.position.y = -scrollProg * 3.5;

      // Orbit rings spin
      ringGroup.rotation.z = elapsed * 0.08 + scrollRotationY * 0.5;
      ringGroup.rotation.x = Math.PI / 4 + Math.cos(elapsed * 0.05) * 0.1;

      // Particles react to scroll
      particleSystem.rotation.y = -elapsed * 0.04 - scrollRotationY * 0.3;
      particleSystem.rotation.x = elapsed * 0.02 + scrollProg * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-85 transition-opacity"
      aria-hidden="true"
    />
  );
};
