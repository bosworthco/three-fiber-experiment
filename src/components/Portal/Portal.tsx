import * as THREE from 'three'
import {
  RoundedBox,
  MeshPortalMaterial,
  Environment,
  useTexture,
  type PortalMaterialType,
} from '@react-three/drei'
import type { PortalProps } from './Portal.types'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

const Portal: React.FC<PortalProps> = ({
  active,
  bgTexture,
  children,
  name,
  setActive,
  ...props
}) => {
  const portalMaterial = useRef<PortalMaterialType>(null!)
  const map = useTexture(bgTexture)
  const current = active === name

  useFrame((_state, delta) => {
    easing.damp(
      portalMaterial.current,
      'blend',
      current ? THREE.NormalBlending : THREE.NoBlending,
      0.2,
      delta,
    )
  })

  return (
    <group {...props}>
      <RoundedBox
        name={name}
        args={[5, 7, 0.05]}
        onDoubleClick={() => setActive(current ? undefined : name)}
      >
        <MeshPortalMaterial side={THREE.DoubleSide} ref={portalMaterial}>
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
