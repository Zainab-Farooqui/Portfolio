import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function FloatingSphere() {
  return (
    <mesh rotation={[0.4, 0.6, 0]}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#b00000"
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4] }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <FloatingSphere />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
