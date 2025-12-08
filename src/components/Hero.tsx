import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Sky, Cloud } from '@react-three/drei';
import * as THREE from 'three';
import { SolarPanelModel } from './SolarPanelModel';
import bgImage from '../assets/hero-bg.png';
import logo from '../assets/logo.png';

// Animated Sky Environment Component
const AnimatedSkyEnvironment = () => {
    const sunPosRef = useRef([100, 20, 100]);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        // Slowly move sun position to create moving cloud-like reflections
        sunPosRef.current = [
            100 + Math.sin(t * 0.1) * 50,
            20 + Math.cos(t * 0.15) * 10,
            100 + Math.cos(t * 0.08) * 30
        ];
    });

    return (
        <Environment background={false}>
            <Sky
                distance={450000}
                sunPosition={sunPosRef.current as [number, number, number]}
                inclination={0.6}
                azimuth={0.25}
                turbidity={8}
                rayleigh={2}
            />
            {/* Animated Clouds - visible in reflections */}
            <Cloud
                opacity={0.6}
                speed={0.4}
                segments={20}
                bounds={[10, 5, 10]}
                color="white"
                position={[-10, 1, -10]}
            />
            <Cloud
                opacity={0.5}
                speed={0.3}
                segments={18}
                bounds={[8, 4, 8]}
                color="white"
                position={[12, 2, -15]}
            />
            <Cloud
                opacity={0.55}
                speed={0.35}
                segments={20}
                bounds={[9, 4, 9]}
                color="white"
                position={[0, 3, -12]}
            />
        </Environment>
    );
};

// Rig Component: Controls the camera or model based on scroll
const ScrollRig = () => {
    const { camera } = useThree();
    const panelRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const scrollY = window.scrollY;
        const scrollProgress = Math.min(scrollY / (window.innerHeight * 0.8), 1);

        // Camera gentle drift
        camera.position.x = Math.sin(t * 0.1) * 0.2;

        // Solar Panel Animation: Starts slightly tilted, rotates upright on scroll
        if (panelRef.current) {
            // Start slightly tilted (not completely flat)
            const initialRotationX = -Math.PI / 2;
            // End tilted forward (more visible)
            const finalRotationX = -Math.PI / 9;

            panelRef.current.rotation.x = THREE.MathUtils.lerp(initialRotationX, finalRotationX, scrollProgress);
        }
    });

    return (
        <group ref={panelRef} rotation={[-Math.PI / 8, 0, 0]} position={[0, -2, 0]} scale={1.5}>
            <SolarPanelModel />
        </group>
    )
}

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Image Layer - Cerro de la Silla */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Cerro de la Silla"
                    className="w-full h-full object-cover object-[center_90%] scale-110"
                />
            </div>

            {/* 3D Canvas Layer - Transparent background, only shows panel */}
            <div className="absolute inset-0 z-10">
                <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
                    <ambientLight intensity={0.8} />
                    <spotLight position={[10, 20, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />

                    {/* Animated Sky Environment for moving reflections */}
                    <AnimatedSkyEnvironment />

                    <ScrollRig />
                </Canvas>
            </div>

            {/* Logo and Subtitle - Behind 3D Model */}
            <div className="absolute inset-0 z-5 flex flex-col items-center justify-center pointer-events-none">
                <img
                    src={logo}
                    alt="SOLPOWER"
                    className="w-80 md:w-[32rem] lg:w-[40rem] xl:w-[48rem] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] -mt-40 mb-4"
                />
                <p className="text-xl md:text-2xl text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-center px-4">
                    Reduce tu factura de CFE hasta en un 95% con SOLPOWER
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce text-white drop-shadow-md pointer-events-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F1F1F1] to-transparent pointer-events-none z-30"></div>
        </section>
    );
};

export default Hero;
