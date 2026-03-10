import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 800;

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#F47920"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function GridFloor() {
  const ref = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.z = -(state.clock.elapsedTime * 0.3) % 2;
  });

  return (
    <gridHelper
      ref={ref}
      args={[40, 40, '#F47920', '#1a2332']}
      position={[0, -3, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function FloatingCube({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#F47920"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

function ConnectionLines() {
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const nodes = Array.from({ length: 12 }, () => [
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 8,
    ]);

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodes[i][0] - nodes[j][0], 2) +
          Math.pow(nodes[i][1] - nodes[j][1], 2) +
          Math.pow(nodes[i][2] - nodes[j][2], 2)
        );
        if (dist < 6) {
          vertices.push(...nodes[i], ...nodes[j]);
        }
      }
    }

    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#F47920" transparent opacity={0.08} />
    </lineSegments>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#F47920" />
      <pointLight position={[-10, -5, -10]} intensity={0.3} color="#1677FF" />

      <ParticleField />
      <GridFloor />
      <ConnectionLines />

      <FloatingCube position={[-4, 1.5, -3]} scale={0.8} speed={1.2} />
      <FloatingCube position={[5, -1, -5]} scale={0.5} speed={0.8} />
      <FloatingCube position={[2, 2.5, -2]} scale={0.6} speed={1.5} />
      <FloatingCube position={[-3, -2, -4]} scale={0.4} speed={1.0} />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Scene />
    </Canvas>
  );
}
