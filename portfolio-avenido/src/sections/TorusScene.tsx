import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls, Text } from "@react-three/drei";

const SpinningTorus: React.FC = () => {
  const torusRef = useRef<Mesh>(null);

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.y += 0.005; // Adjust speed if needed
    }
  });

  return (
    <mesh ref={torusRef} castShadow position={[0,0,0]}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color="#f76e75" metalness={0.4} />
    </mesh>
  );
};

const SpinningText: React.FC = () => {
    const textRef = useRef<any>(null);
  
    useFrame(() => {
      if (textRef.current) {
        textRef.current.rotation.y += 0.005; // Spin the text as well
      }
    });
  
    return (
      <Text
        ref={textRef}
        position={[0, 0, 0]}
        fontSize={0.2}
        color="#ffffff"
        maxWidth={200}
        lineHeight={1.2}
        letterSpacing={0.05}
        textAlign="center"
        rotation={[0, Math.PI / 2, 0]}
      >
        Interact with me
      </Text>
    );
  };

const TorusScene: React.FC = () => {
  return (
    
      <Canvas shadows camera={{ position: [1, 0, 2.5] }} >
        <ambientLight intensity={0.3} />
        <directionalLight 
        position={[5, 5, 6]} 
        intensity={1.3}
        shadow-mapSize-width={1024} // Higher resolution for better shadows
        shadow-mapSize-height={1024}
        shadow-camera-far={10}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        />

        <SpinningTorus />
        <SpinningText/>
        <OrbitControls maxDistance={5} minDistance={2}/>
      </Canvas>
  );
};

export default TorusScene;
