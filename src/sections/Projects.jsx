import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import DemoComputer from '../components/DemoComputer'
const Projects = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <section className="h-7/10 w-4/5 text-white">
        <div className="grid grid-cols-2 gap-5 w-full h-full">
            <div className="flex flex-col justify-around h-full px-16 py-24">
                {/* Project Title */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-semibold">Escape The Dungeon</h2>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-xl leading-relaxed">
                        Regnandi mi v desiderabilem Spoliare-ad-e-Medicus pacifice nisi 
                        necessitas qui hac inducere non locorum. Typi maecenas AD-rhoncus 
                        modestia nisi nisi-te-hofitico-pugnat dissimillimas, il sancli exaudire te 
                        suspncta augusta doloremque sunt v iriure sint justo.
                    </p>
                </div>

                {/* Tech Stack and Button */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <img 
                            src="/assets/react.svg" 
                            alt="React" 
                            className="w-12 h-12 rounded-xl object-contain"
                        />
                        <img 
                            src="/assets/tailwindcss.png" 
                            alt="Tailwind CSS" 
                            className="w-12 h-12 rounded-xl object-contain"
                        />
                    </div>
                    <button className="text-gray-400 font-medium">
                        <span>Github</span>
                    </button>
                </div>
            </div>
            
            <div className="bg-neutral-900 rounded-2xl h-full">
                <Canvas
                camera={{ position: [0, 2, 10], fov: 45 }}
                >
                    <ambientLight intensity={Math.PI} />
                    <directionalLight position={[10, 10, 5]} />
                    <Center>
                    <Suspense fallback={null}>
                        <group scale={0.025} position={[0, 1, 0]} rotation={[0, -0.4, 0]}>
                        <DemoComputer />
                        </group>
                    </Suspense>
                    </Center>
                    <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                </Canvas>
            
            </div>
        </div>
      </section>
    </div>
  )
}

export default Projects