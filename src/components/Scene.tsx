import { useRef, useState } from 'react'
import { motion } from 'framer-motion-3d'
import { OrbitControls } from '@react-three/drei'
import { type MeshProps } from '@react-three/fiber'

import { useCursor } from '@/hooks/useCursor'

interface SceneProps {
  // props here
}

const Scene: React.FC<SceneProps> = () => {
  const [isOn, setOn] = useState<boolean>(false)
  const cubeRef = useRef<MeshProps>(null!)

  return (
    <>
      <OrbitControls enableZoom={false} enableDamping />
      <ambientLight intensity={0.75} />
      <directionalLight position={[0, 0.1, 0.1]} castShadow />

      <motion.group initial={false} animate={isOn ? 'on' : 'off'}>
        <motion.mesh
          ref={cubeRef}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          variants={{
            on: { scale: 1.5, rotateX: 1, rotateY: 1 },
            off: { rotateX: 0, rotateY: 0 },
          }}
          onClick={() => setOn(!isOn)}
          castShadow
          {...useCursor()}
        >
          <motion.boxGeometry args={[1, 1, 1]} />
          <motion.meshStandardMaterial
            variants={{
              on: { color: '#FFA800' },
              off: { color: '#BD34FE' },
            }}
          />
        </motion.mesh>

        <mesh position-y={-1.5} rotation-x={-Math.PI * 0.5} receiveShadow>
          <boxGeometry args={[5, 5, 0.1]} />
          <meshStandardMaterial />
        </mesh>
      </motion.group>
    </>
  )
}

export default Scene
