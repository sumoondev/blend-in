import * as THREE from 'three'
import Arena from './Arena.jsx'

export default function Experience()
{
    return <>
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
        
        <Arena />
    </>
}