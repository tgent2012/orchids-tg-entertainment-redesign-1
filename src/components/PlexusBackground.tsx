"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 150;
const CONNECTION_DISTANCE = 3.5;
const MOUSE_INFLUENCE_DISTANCE = 4.0;
const PARTICLE_SPEED = 0.01;

function PlexusParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { mouse, viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10;
      const vx = (Math.random() - 0.5) * PARTICLE_SPEED;
      const vy = (Math.random() - 0.5) * PARTICLE_SPEED;
      const vz = (Math.random() - 0.5) * PARTICLE_SPEED;
      temp.push({ x, y, z, vx, vy, vz });
    }
    return temp;
  }, []);

  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  const linesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    // Max lines is PARTICLE_COUNT * (PARTICLE_COUNT - 1) / 2, but we'll cap it
    const positions = new Float32Array(PARTICLE_COUNT * 10 * 3);
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = pointsRef.current!.geometry.attributes.position.array as Float32Array;
    const linePositions = linesRef.current!.geometry.attributes.position.array as Float32Array;
    let lineIndex = 0;

    // Convert mouse to world coords roughly
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];

      // Update position
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;

      // Bounce off boundaries
      if (Math.abs(p.x) > 10) p.vx *= -1;
      if (Math.abs(p.y) > 10) p.vy *= -1;
      if (Math.abs(p.z) > 5) p.vz *= -1;

      // Mouse interaction
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MOUSE_INFLUENCE_DISTANCE) {
        p.x -= dx * 0.02 * (1 - dist / MOUSE_INFLUENCE_DISTANCE);
        p.y -= dy * 0.02 * (1 - dist / MOUSE_INFLUENCE_DISTANCE);
      }

      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;
    }

    pointsRef.current!.geometry.attributes.position.needsUpdate = true;

    // Connections
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dz = particles[i].z - particles[j].z;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
          if (lineIndex < linePositions.length - 6) {
            linePositions[lineIndex++] = particles[i].x;
            linePositions[lineIndex++] = particles[i].y;
            linePositions[lineIndex++] = particles[i].z;
            linePositions[lineIndex++] = particles[j].x;
            linePositions[lineIndex++] = particles[j].y;
            linePositions[lineIndex++] = particles[j].z;
          }
        }
      }
    }

    // Reset remaining line positions to zero or far away
    for (let i = lineIndex; i < linePositions.length; i++) {
      linePositions[i] = 0;
    }

    linesRef.current!.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial
          size={0.06}
          color="#c8ff00"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef} geometry={linesGeometry}>
        <lineBasicMaterial
          color="#c8ff00"
          transparent
          opacity={0.15}
          linewidth={1}
        />
      </lineSegments>
    </>
  );
}

export default function PlexusBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-black overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
      >
        <PlexusParticles />
      </Canvas>
    </div>
  );
}
