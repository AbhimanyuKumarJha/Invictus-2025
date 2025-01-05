/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\public\gate.glb --transform 
Files: .\public\gate.glb [318.46MB] > D:\projects\invictus25\gate-transformed.glb [18.68MB] (94%)
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props: any) {
  const group = React.useRef()
  const { nodes, materials, animations }: { nodes: any, materials: any, animations: any } = useGLTF('/gate-transformed.glb')
  const { actions }: { actions: any } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} position={[0,-10,0]}>
      <group name="Scene">
        <group name="Cherry_Blossom_Trees" position={[2.655, -0.673, -19.584]} scale={0.23} />
        <group name="Cherry_Blossom_Trees001" position={[2.655, -0.673, -19.584]} scale={0.23} />
        <group name="Cherry_Blossom_Trees002" position={[-1.361, -0.116, 22.148]} scale={0.258} />
        <group name="tree009">
          <mesh name="tree044" geometry={nodes.tree044.geometry} material={materials.bark_cherry_tree} />
          <mesh name="tree044_1" geometry={nodes.tree044_1.geometry} material={materials.cerrulata_leaves} />
          <mesh name="tree044_2" geometry={nodes.tree044_2.geometry} material={materials.petal} />
          <mesh name="tree044_3" geometry={nodes.tree044_3.geometry} material={materials.PaletteMaterial001} />
          <mesh name="tree044_4" geometry={nodes.tree044_4.geometry} material={materials['stem.001']} />
        </group>
        <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials.Bricks} position={[15.171, 9.556, -0.322]} rotation={[0, 0, -Math.PI / 2]} scale={[7.702, 5.386, 7.702]} />
        <group name="Cube005" position={[11.834, 7.463, -0.526]} rotation={[0, Math.PI / 2, 0]} scale={[3.092, 2.679, 0.161]}>
          <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials.Material} />
          <mesh name="Cube005_2" geometry={nodes.Cube005_2.geometry} material={materials['ambientCG/Metal027/1K-JPG']} />
          <mesh name="Cube005_3" geometry={nodes.Cube005_3.geometry} material={materials['Light concrete (stone)']} />
          <mesh name="Cube005_4" geometry={nodes.Cube005_4.geometry} material={materials['Sisal Rope']} />
          <mesh name="Cube005_5" geometry={nodes.Cube005_5.geometry} material={materials.Paper} />
          <mesh name="Cube005_6" geometry={nodes.Cube005_6.geometry} material={materials['Wood.003']} />
          <mesh name="Cube005_7" geometry={nodes.Cube005_7.geometry} material={materials.PaletteMaterial002} />
          <mesh name="Cube005_8" geometry={nodes.Cube005_8.geometry} material={materials.byoubue} />
          <mesh name="Cube005_9" geometry={nodes.Cube005_9.geometry} material={materials.Bricks} />
          <mesh name="Cube005_10" geometry={nodes.Cube005_10.geometry} material={materials.Asphalt} />
          <mesh name="Cube005_11" geometry={nodes.Cube005_11.geometry} material={materials.Door} />
          <mesh name="Cube005_12" geometry={nodes.Cube005_12.geometry} material={materials['Material_0.001']} />
          <mesh name="Cube005_13" geometry={nodes.Cube005_13.geometry} material={materials['Material_1.001']} />
          <mesh name="Cube005_14" geometry={nodes.Cube005_14.geometry} material={materials['Material_2.001']} />
          <mesh name="Cube005_15" geometry={nodes.Cube005_15.geometry} material={materials['Green grass with leafes']} />
          <mesh name="Cube005_16" geometry={nodes.Cube005_16.geometry} material={materials.brush_OilPaint} />
          <mesh name="Cube005_17" geometry={nodes.Cube005_17.geometry} material={materials.brush_Light} />
          <mesh name="Cube005_18" geometry={nodes.Cube005_18.geometry} material={materials.Wood} />
          <mesh name="Cube005_19" geometry={nodes.Cube005_19.geometry} material={materials.bark} />
          <mesh name="Cube005_20" geometry={nodes.Cube005_20.geometry} material={materials.foliage} />
          <mesh name="Cube005_21" geometry={nodes.Cube005_21.geometry} material={materials.Birch_Stairs} />
          <mesh name="Cube005_22" geometry={nodes.Cube005_22.geometry} material={materials.Iron_Bars} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/gate-transformed.glb')