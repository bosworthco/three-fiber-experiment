import React from 'react'

interface YourComponentNameProps {
  // Add your component props here
}

const YourComponentName: React.FC<YourComponentNameProps> = () => {
  return (
    <mesh>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

export default YourComponentName
