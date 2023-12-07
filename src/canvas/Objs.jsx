import React, { useRef } from "react"
import {easing} from 'maath'
import {useSnapshot} from 'valtio'
import { useFrame } from "@react-three/fiber"
import { Decal, useGLTF, useTexture } from "@react-three/drei"

import state from "../store"

// Hacks https://gltf.pmnd.rs/

const Blue_Vans = ({Position = [0,0,0]}) => {
    const snap = useSnapshot(state);
    const group = useRef();
    const {nodes, materials} = useGLTF('/blue_sneaker.glb');


    const stateString = JSON.stringify(snap);
    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <=1260;
        const isMobile = window.innerWidth <= 600;

        //set Model Rotation
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta)
    })

    return (
        <group
            key={stateString}
            ref={group}
        >
            <mesh
            castShadow
            geometry={nodes.Blue_Sneaker.geometry}
            material={materials.Material01}
            dispose={null}
            position={Position}
            >

            </mesh>
        </group>
    )
}

export default Blue_Vans