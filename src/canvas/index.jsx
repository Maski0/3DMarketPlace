import {Canvas} from '@react-three/fiber'
import {Environment, Center, ScrollControls, Scroll} from '@react-three/drei'

import Blue_Vans from './Objs'
import BackDrop from './Backdrop'
import CameraRig from './CameraRig'

const CanvasModel = () => {
    return (
        <Canvas
            shadows
            camera={{position:[-0.4,0,2],fov: 24}}
            gl={{preserveDrawingBuffer: true}}
            className='w-full max-w-full transition-all ease-in'
        >
            <ambientLight intensity={0.5} />
            <Environment preset='city' />
            <ScrollControls
                pages={3}
                damping={0.25}
            >
                
                <Scroll>
                <CameraRig>
                    <BackDrop />
                    <Center>
                        <Blue_Vans />
                    </Center>
                </CameraRig>
                </Scroll>
           </ScrollControls>

        </Canvas>
    )
}

export default CanvasModel