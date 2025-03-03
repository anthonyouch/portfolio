import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import DemoComputer from '../components/DemoComputer'
import CanvasLoader from '../components/Loading'
const Projects2 = () => {
  return (
    <div className="w-full h-[200vh] sm:h-screen bg-black flex justify-center items-center">
        <section className="sm:h-7/10 h-full w-4/5 text-white grid sm:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex flex-col justify-around h-full px-16 py-24">
                {/* Project Title */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-semibold">Chess Engine</h2>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-xl leading-relaxed">
                    Developed a Python chess engine with advanced search algorithms and Lichess API integration for real-time play.
        
                    </p>
                    <p className="text-gray-400 text-xl leading-relaxed">
                        Implemented Negamax with Alpha-Beta Pruning, Iterative Deepening, and Quiescent Search to improve
                        decision-making efficiency and search depth.
                    </p>
                    <p className="text-gray-400 text-xl leading-relaxed">
                        Optimized performance using multithreading for parallel computation, transposition tables for move ordering, and
                        aspiration windows for pruning inefficiencies.
                    </p>
                </div>

                {/* Tech Stack and Button */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <img 
                            src="/assets/python.png" 
                            alt="Python" 
                            className="w-12 h-12 rounded-xl object-contain"
                        />
                        <img 
                            src="/assets/lichess.png" 
                            alt="Lichess" 
                            className="w-12 h-12 rounded-xl object-contain"
                        />
                    </div>
                    <button className="text-gray-400 font-medium">
                        <span><a href="https://github.com/anthonyouch/Chess-Engine" alt="link to github" target="_blank">Github</a></span>
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
                    <Suspense fallback={<CanvasLoader />}>
                        <group scale={0.025} position={[0, -1, 0]} rotation={[0, -0.4, 0]}>
                        <DemoComputer screenPath="/assets/project2-screen.jpg" />
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

export default Projects2