import * as THREE from 'three'
import { Environment, OrbitControls, useTexture } from '@react-three/drei'
import { Pigeon } from './Pigeon'

interface WorldProps {
  // props here
}

const World: React.FC<WorldProps> = () => {
  const map = useTexture('textures/planet.jpeg')

  return (
    <>
      <ambientLight intensity={0.75} />
      <Environment preset='sunset' />
      <OrbitControls enableDamping />

      <Pigeon scale={2} position-y={-3} />

      <mesh>
        <sphereGeometry args={[10, 64, 64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  )
}

export default World
