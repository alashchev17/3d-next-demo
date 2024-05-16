import { RefObject, Dispatch, SetStateAction } from 'react'
import { Text3D } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

type TextViewProps = {
  textWidth: number
  textRef: RefObject<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>>>
  text: string
  scaleFactor: number
  setTextWidth: Dispatch<SetStateAction<number>>
}

export default function TextView({ textRef, textWidth, text, scaleFactor, setTextWidth }: TextViewProps) {
  useFrame(() => {
    if (textRef.current) {
      textRef.current.geometry.computeBoundingBox()
      setTextWidth((textRef.current.geometry.boundingBox!.max.x - textRef.current.geometry.boundingBox!.min.x) * scaleFactor)
    }
  })

  return (
    <Text3D
      ref={textRef}
      font={'/assets/fonts/KTF-Forma-Bold_Regular.json'}
      bevelEnabled={true}
      curveSegments={12}
      letterSpacing={-0.05}
      position={[-textWidth / 2, 0, 0]}
      scale={[scaleFactor, scaleFactor, scaleFactor]}
    >
      {text}
      <meshNormalMaterial />
    </Text3D>
  )
}
