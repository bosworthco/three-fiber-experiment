import * as THREE from 'three'
import { RoundedBox, MeshPortalMaterial, Environment, useTexture } from '@react-three/drei'
import type { GroupProps } from '@react-three/fiber'

interface PortalProps extends GroupProps {
  children: React.ReactNode
  bgTexture: string
}

const Portal: React.FC<PortalProps> = ({ children, bgTexture, ...props }) => {
  const map = useTexture(bgTexture)

  return (
    <group {...props}>
      <RoundedBox args={[5, 7, 0.05]}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={0.75} />
          <Environment preset='sunset' />

          {children}

          <mesh>
            <sphereGeometry args={[10, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  )
}

export default Portal
