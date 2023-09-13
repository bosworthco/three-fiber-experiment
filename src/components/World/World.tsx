import { Center, Environment, OrbitControls, Text3D } from '@react-three/drei'
import { Bunny, Pigeon, Portal } from '@/components'

const World: React.FC = () => {
  return (
    <>
      <Environment preset='sunset' />
      <OrbitControls enableDamping enableZoom={false} />

      <Center position-y={5}>
        <Text3D font='fonts/gochi_hand_reg.typeface.json'>
          Pick a Monster
          <meshNormalMaterial />
        </Text3D>
      </Center>

      <Portal bgTexture='textures/planet.jpeg' position-x={-3} rotation={[0, 0.2, 0]}>
        <Pigeon scale={1.5} position-y={-3} />
      </Portal>

      <Portal bgTexture='textures/laboratory.jpeg' position-x={3} rotation={[0, -0.2, 0]}>
        <Bunny scale={1.5} position-y={-3} />
      </Portal>
    </>
  )
}

export default World
