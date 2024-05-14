import { useRef } from 'react'
import Lights from '@/components/Lights'
import { OrbitControls } from '@react-three/drei'
import { useThree, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useSettings } from '../context/SettingsContext'

const ModelView = () => {
  const meshTextureRef = useRef<THREE.Mesh>(null!)
  const meshImageRef = useRef<THREE.Mesh>(null!)
  const { currentTexture, currentImage } = useSettings()
  const { scene } = useThree()
  scene.background = new THREE.Color('#e3e3e3')
  const textureMaterial = useLoader(THREE.TextureLoader, currentTexture)
  const imageMaterial = useLoader(THREE.TextureLoader, currentImage)

  console.log(textureMaterial)

  return (
    <>
      <Lights />
      <OrbitControls makeDefault enableZoom={false} enablePan={false} />
      <gridHelper args={[10000, 1000]} />
      <group>
        <mesh ref={meshImageRef}>
          {/* User's Image Geometry */}
          <boxGeometry args={[85, 55, 0.38]} />
          <meshStandardMaterial map={imageMaterial} roughness={1} metalness={0} alphaTest={0.25} transparent={true} />
        </mesh>
        {/* User's Texture Geometry */}
        <mesh ref={meshTextureRef}>
          <boxGeometry args={[85, 55, 0.36]} />
          <meshStandardMaterial map={textureMaterial} roughness={1} metalness={0} roughnessMap={textureMaterial} />
        </mesh>
      </group>
    </>
  )
}

export default ModelView
