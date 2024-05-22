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
      const frustumHeight = 100
      const frustumWidth = frustumHeight * aspect

      // Set the camera bounds to ensure (0, 0, 0) is in the bottom-left corner
      cameraRef.current.left = 0
      cameraRef.current.right = frustumWidth
      cameraRef.current.top = frustumHeight
      cameraRef.current.bottom = 0
      cameraRef.current.position.set(0, 0, 1000)
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
      near={0}
      far={2000}
      onUpdate={(self) => {
        self.updateProjectionMatrix()
      }}
    />
  )
}
