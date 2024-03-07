/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 --transform cuatroQuesos.glb 
Files: cuatroQuesos.glb [4.46MB] > /Users/gonzalo/Desktop/template-ecommerce-react-three-fiber-main/public/models/cuatroQuesos-transformed.glb [311.18KB] (93%)
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';

export function CuatroQuesos(props) {
  const { nodes, materials } = useGLTF('/models/cuatroQuesos-transformed.glb')
  const refModel = useRef();
  useEffect(() => {
    if (props.inView){
      gsap.to(refModel.current.scale, {x: 1, y: 1, z: 1, duration: 3})
    }else{
      gsap.to(refModel.current.scale, {x: 0.1, y: 0.1, z: 0.1, duration: 3})
    }
  }, [props.inView]);
  return (
    <group {...props} dispose={null} scale={[0.1,0.1,0.1]} ref={refModel}>
      <mesh geometry={nodes.Mesh_0001.geometry} material={materials['Material_0.001']}  scale={3.5} position={[0,-0.4,0]} />
    </group>
  )
}

useGLTF.preload('/models/cuatroQuesos-transformed.glb')
