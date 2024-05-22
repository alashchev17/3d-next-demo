'use client'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import TextView from '@/components/TextView'
import OrthographicCameraComponent from '@/components/OrthographicCameraComponent'

export default function TextTest() {
  const textRef = useRef<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>>>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasDivRef = useRef<HTMLDivElement>(null)
  const cameraRef = useRef<THREE.OrthographicCamera>(null)
  const [textWidth, setTextWidth] = useState(0)
  const [textHeight, setTextHeight] = useState(0)
  const [scaleFactor, setScaleFactor] = useState(60)

  useEffect(() => {
    console.log(`[INFO]: textWidth: ${textWidth}`)
  }, [textWidth])

  useEffect(() => {
    console.log(`[INFO]: textHeight: ${textHeight}`)
  }, [textHeight])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        ref={canvasDivRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Canvas
          ref={canvasRef}
          gl={{
            antialias: true,
            alpha: true,
          }}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
          onCreated={({ gl }) => {
            console.log(`[INFO]: gl: `, gl)
            gl.setClearColor(0xffffff, 1)
          }}
        >
          <OrthographicCameraComponent />
          <OrbitControls enableZoom={false} enablePan={true} />
          <ambientLight color="#ffffff" intensity={15} />
          <gridHelper args={[10000, 100]} />
          <axesHelper args={[500]} />
          <TextView
            text="Taubman"
            textWidth={textWidth}
            textHeight={textHeight}
            setTextHeight={setTextHeight}
            setTextWidth={setTextWidth}
            textRef={textRef}
            scaleFactor={scaleFactor}
            setScaleFactor={setScaleFactor}
          />
        </Canvas>
      </div>
    </div>
  )
}
