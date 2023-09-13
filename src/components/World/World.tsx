import * as THREE from 'three'
import { CameraControls, Center, Environment, Text3D } from '@react-three/drei'
import { Bunny, Pigeon, Portal } from '@/components'
import { useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'

const World: React.FC = () => {
  const [activePortal, setActivePortal] = useState<string>()
  const controlsRef = useRef<CameraControls>(null)
  const scene = useThree((state) => state.scene)

  useEffect(() => {
    if (!controlsRef.current) return

    if (activePortal) {
      const targetPosition = new THREE.Vector3()
      scene.getObjectByName(activePortal)?.getWorldPosition(targetPosition)
      controlsRef.current
        .setLookAt(0, 1, 5, targetPosition.x, targetPosition.y, targetPosition.z, true)
        .catch((error) => {
          console.error('Failed to set lookAt:', error)
        })
    } else {
      controlsRef.current.setLookAt(0, 1, 10, 0, 0, 0, true).catch((error) => {
        console.error('Failed to set lookAt:', error)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePortal])

  return (
    <>
      <Environment preset='sunset' />
      <CameraControls ref={controlsRef} />
      <Center position-y={5}>
        <Text3D font='fonts/gochi_hand_reg.typeface.json'>
          Pick a Monster
          <meshNormalMaterial />
        </Text3D>
      </Center>

      <Portal
        name='pigeon'
        bgTexture='textures/planet.jpeg'
        position-x={-3}
        rotation={[0, 0.1, 0]}
        active={activePortal}
        setActive={setActivePortal}
      >
        <Pigeon scale={1.5} position-y={-3} />
      </Portal>

      <Portal
        name='bunny'
        bgTexture='textures/laboratory.jpeg'
        position-x={3}
        rotation={[0, -0.1, 0]}
        active={activePortal}
        setActive={setActivePortal}
      >
        <Bunny scale={1.5} position-y={-3} />
      </Portal>
    </>
  )
}

export default World
