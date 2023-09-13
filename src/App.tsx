import { Vector3 } from 'three'
import { Canvas } from '@react-three/fiber'
import World from '@/components/World'

function App() {
  const camera = {
    position: new Vector3(0, 1, 10),
    fov: 80,
  }

  return (
    <Canvas shadows camera={camera}>
      <World />
    </Canvas>
  )
}

export default App
