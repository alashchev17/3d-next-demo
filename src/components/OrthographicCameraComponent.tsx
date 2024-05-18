import React, { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'
import * as THREE from 'three'

export default function OrthographicCameraComponent() {
  const cameraRef = useRef<THREE.OrthographicCamera>(null)
  const { size } = useThree()

  useEffect(() => {
    const handleResize = () => {
      if (!cameraRef.current) {
        return
      }

      const aspect = size.width / size.height
      cameraRef.current.left = -aspect * 100
      cameraRef.current.right = aspect * 100
      cameraRef.current.top = 100
      cameraRef.current.bottom = -100
      cameraRef.current.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [size])
  return (
    <OrthographicCamera
      ref={cameraRef}
      makeDefault
      manual
      zoom={1}
      top={100}
      bottom={-100}
      left={-255}
      right={255}
      near={0}
      far={20000}
      position={[0, 0, 1000]}
      onUpdate={(self) => {
        const { zoom } = self
        console.log(zoom)
      }}
    />
  )
}
