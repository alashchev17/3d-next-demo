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
  setScaleFactor: Dispatch<SetStateAction<number>>
  setTextWidth: Dispatch<SetStateAction<number>>
  setTextHeight: Dispatch<SetStateAction<number>>
}

export default function TextView({ textRef, textWidth, textHeight,setScaleFactor, text, scaleFactor, setTextWidth, setTextHeight }: TextViewProps) {
  const texture = useTexture('/assets/textures/tile.png')
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(20, 20)
  useFrame(() => {
    if (textRef.current) {
      textRef.current.geometry.computeBoundingBox()
      const width = textRef.current.geometry.boundingBox!.max.x - textRef.current.geometry.boundingBox!.min.x
      const height = textRef.current.geometry.boundingBox!.max.y - textRef.current.geometry.boundingBox!.min.y
      const aspectRatio = (textRef.current.geometry.boundingBox!.max.x - textRef.current.geometry.boundingBox!.min.x) / (textRef.current.geometry.boundingBox!.max.y - textRef.current.geometry.boundingBox!.min.y)
      // setTextWidth((textRef.current.geometry.boundingBox!.max.x - textRef.current.geometry.boundingBox!.min.x) * scaleFactor * 4)
      setTextWidth(window.innerWidth)
      // setTextHeight((textRef.current.geometry.boundingBox!.max.y - textRef.current.geometry.boundingBox!.min.y) * scaleFactor * 4.58)
      setTextHeight(window.innerWidth / aspectRatio)
      setScaleFactor(window.innerWidth / window.innerHeight * 16.5)
    }
  })

  return (
    <Text3D
      ref={textRef}
      font={'/assets/fonts/KTF-Forma-Bold_Regular-2.json'}
      bevelEnabled={true}
      curveSegments={12}
      letterSpacing={-0.08}
      position={[0, 5, 0]}
      scale={[scaleFactor, scaleFactor, scaleFactor]}
    >
      {text}
      <meshStandardMaterial map={texture} roughness={0} />
    </Text3D>
  )
}
