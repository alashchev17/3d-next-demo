'use client'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Text3D } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import TextView from '@/components/TextView'

export default function TextTest() {
  const textRef = useRef<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>>>(null)
  const [textWidth, setTextWidth] = useState(0)
  const [scaleFactor, setScaleFactor] = useState(2)

  useEffect(() => {
    console.log(`[INFO]: textWidth: ${textWidth}`)
  }, [textWidth])

  return (
    <div>
      <Canvas
        camera={{ position: [0, 0, 10] }}
        gl={{
          antialias: true,
          alpha: true,
        }}
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <OrbitControls enableZoom={false} enablePan={true} />
        <ambientLight color="#ffffff" />
        <gridHelper args={[50, 50]} />
        <TextView text="Cith" textWidth={textWidth} setTextWidth={setTextWidth} textRef={textRef} scaleFactor={scaleFactor} />
      </Canvas>
    </div>
  )
}
