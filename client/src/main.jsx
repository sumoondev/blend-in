import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './component/Experience.jsx'
import './main.css'

const root = createRoot(document.querySelector("#root"))

root.render(
	<Canvas
		shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 3, 2, 6 ]
        } }
	>
		<Experience />
	</Canvas>
)