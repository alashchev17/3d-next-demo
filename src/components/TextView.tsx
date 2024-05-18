import { RefObject, Dispatch, SetStateAction } from 'react'
import { Text3D, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

type TextViewProps = {
  textWidth: number
  textHeight: number
  textRef: RefObject<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>>>
  text: string
  scaleFactor: number
  setTextWidth: Dispatch<SetStateAction<number>>
  setTextHeight: Dispatch<SetStateAction<number>>
}

export default function TextView({ textRef, textWidth, textHeight, text, scaleFactor, setTextWidth, setTextHeight }: TextViewProps) {
  const texture = useTexture('/assets/textures/tile.png')
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(20, 20)
  useFrame(() => {
    if (textRef.current) {
      textRef.current.geometry.computeBoundingBox()
      const aspectRatio = window.innerWidth / window.innerHeight
      setTextWidth((textRef.current.geometry.boundingBox!.max.x - textRef.current.geometry.boundingBox!.min.x) * scaleFactor)
      // setTextWidth(window.innerWidth)
      setTextHeight((textRef.current.geometry.boundingBox!.max.y - textRef.current.geometry.boundingBox!.min.y) * scaleFactor)
      // setTextHeight(window.innerWidth / aspectRatio)
    }
  })

  return (
    <Text3D
      ref={textRef}
      font={'/assets/fonts/KTF-Forma-Bold_Regular.json'}
      bevelEnabled={true}
      curveSegments={12}
      letterSpacing={-0.08}
      position={[-textWidth / 2, -textHeight / 2, 0]}
      scale={[scaleFactor, scaleFactor, scaleFactor]}
    >
      {text}
      <meshStandardMaterial map={texture} roughness={0} />
    </Text3D>
  )
}
