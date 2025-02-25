import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import DemoComputer from '../components/DemoComputer'
const Projects = () => {
  return (
    <div className="w-full h-[200vh] sm:h-screen bg-black flex justify-center items-center">
        <section className="sm:h-7/10 h-full w-4/5 text-white grid sm:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex flex-col justify-around h-full px-16 py-24">
                {/* Project Title */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-semibold">Escape The Dungeon</h2>
                    
                    {/* Description */}
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Developed a top-down rogue-like shooter with procedurally generated dungeons using Binary Space Partitioning
                            and Random Walk algorithms. 
                        </p>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Implemented AI-driven enemy pathfinding and attack mechanics, improving gameplay.
                        </p>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Actively integrated comprehensive player feedback to refine game mechanics, addressing issues such as enemy pathfinding and visibility.
                        </p>
                    </div>
                </div>

                {/* Tech Stack and Button */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <img 
                            src="/assets/unity.png" 
                            alt="Unity" 
                            className="w-12 h-12 rounded-xl object-contain"
                        />
                        <img 
                            src="/assets/photoshop.png" 
                            alt="Photoshop" 
                            className="w-12 h-12 rounded-xl object-contain"
                        />
                        <img 
                            src="/assets/blender.png" 
                            alt="Blender" 
                            className="w-12 h-12 rounded-xl object-contain"
                        />
                    </div>
                    <button className="text-gray-400 font-medium">
                        <span> <a href="https://github.com/anthonyouch/escape-the-dungeon" alt="link to github" target="_blank">Github</a></span>
                    </button>
                </div>
            </div>
            
            <div className="bg-neutral-950 rounded-2xl h-full">
                <Canvas
                camera={{ position: [0, 2, 10], fov: 45 }}
                >
                    <ambientLight intensity={Math.PI} />
                    <directionalLight position={[10, 10, 5]} />
                    <Center>
                    <Suspense fallback={null}>
                        <group scale={0.025} position={[0, -1, 0]} rotation={[0, -0.4, 0]}>
                        <DemoComputer />
                        </group>
                    </Suspense>
                    </Center>
                    <OrbitControls 
                        enableZoom={false}
                        enableRotate={true}
                        target={[0, 0, 0]}
                        maxPolarAngle={Math.PI / 2}
                    />
                </Canvas>
            
            </div>
        </section>
    </div>
  )
}

export default Projects