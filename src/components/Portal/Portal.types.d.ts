import type { GroupProps } from '@react-three/fiber'
import type { Dispatch, ReactNode, SetStateAction } from 'react'

export interface PortalProps extends GroupProps {
  children: ReactNode
  bgTexture: string
  name: string
  active?: string
  setActive: Dispatch<SetStateAction<string | undefined>>
}
