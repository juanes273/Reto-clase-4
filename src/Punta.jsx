import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Punta() {
    const PATH = "/static/textures/door/"
    
    const props = useTexture({
        map: PATH + "color.jpg",
        //displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        metalnessMap: PATH + 'metallic.jpg'
    })

    return (
        <mesh castShadow={true} position-z={0.6} position-y={-0} position-x={0}>
            <coneBufferGeometry args={[1, 3, 64]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}