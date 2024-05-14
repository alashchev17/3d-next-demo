import { Canvas } from '@react-three/fiber'
import ModelView from '@/components/ModelView'
import { Suspense } from 'react'
import { Html } from '@react-three/drei'

const Model = () => {
  return (
    <div id="canvas-container" className="w-[100dvw] h-[100dvh] relative">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 100],
        }}
        style={{ position: 'relative' }}
      >
        <Suspense
          fallback={
            <Html className="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] bg-gray-700">
              <div className="absolute top-0 left-0 translate-x-[-30%] translate-y-[-50%] text-black w-[300px]">
                Please wait, model is loading...
              </div>
            </Html>
          }
        >
          <ModelView />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Model
