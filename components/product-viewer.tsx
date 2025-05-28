"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, PresentationControls } from "@react-three/drei"
import { Suspense } from "react"

function EarbudsModel() {
  // Since we don't have the actual Oppo Enco Buds 3 model, we'll use a placeholder
  // In a real scenario, you would import the actual model
  const group = useRef()

  // Simulate a model with a simple mesh
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <group ref={group}>
      {/* This would be replaced with the actual earbuds model */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[2.5, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#0066cc" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1.25, -1, 0]}>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  )
}

export default function ProductViewer() {
  return (
    <div className="w-full h-[500px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl"></div>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <EarbudsModel />
          </PresentationControls>
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs">
        360° View
      </div>
    </div>
  )
}
