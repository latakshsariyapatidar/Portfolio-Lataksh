import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Box } from '@react-three/drei';
import * as THREE from 'three';

// Augment JSX namespace to recognize React Three Fiber intrinsic elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      meshBasicMaterial: any;
    }
  }
}

const Geometries = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle overall rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  // Create a scattered arrangement of "building blocks" (components)
  return (
    <group ref={groupRef}>
      {/* Central React-like shape */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[1, 0]} position={[0, 0, 0]}>
          <meshBasicMaterial wireframe color="#38bdf8" transparent opacity={0.3} />
        </Icosahedron>
      </Float>

      {/* Scattered shapes representing DOM elements/components */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box args={[0.5, 0.5, 0.5]} position={[2, 1, -1]}>
          <meshBasicMaterial wireframe color="#818cf8" transparent opacity={0.2} />
        </Box>
      </Float>

      <Float speed={1} rotationIntensity={2} floatIntensity={2}>
        <Icosahedron args={[0.6, 0]} position={[-2, 1.5, -0.5]}>
          <meshBasicMaterial wireframe color="#38bdf8" transparent opacity={0.2} />
        </Icosahedron>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={1}>
        <Box args={[0.4, 0.4, 0.4]} position={[-1.5, -1.5, 0.5]}>
          <meshBasicMaterial wireframe color="#818cf8" transparent opacity={0.15} />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.8}>
        <Box args={[0.3, 0.3, 0.3]} position={[1.8, -1, 0.5]}>
          <meshBasicMaterial wireframe color="#38bdf8" transparent opacity={0.15} />
        </Box>
      </Float>
      
       <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
        <Icosahedron args={[0.3, 0]} position={[0, 2, -1]}>
          <meshBasicMaterial wireframe color="#818cf8" transparent opacity={0.1} />
        </Icosahedron>
      </Float>
    </group>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none fade-mask">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
        <Geometries />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712]" />
    </div>
  );
};

export default Background3D;