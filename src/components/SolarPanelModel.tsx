import React, { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export const SolarPanelModel = (props: any) => {
    // Solar panel dimensions - Wider aspect ratio ~1.6:1
    const width = 8;
    const height = 5;
    const frameThickness = 0.1;

    // Refs for materials to animate opacity
    const frameMaterialRef = useRef<THREE.MeshStandardMaterial>(null);
    const cellMaterialRef = useRef<THREE.MeshPhysicalMaterial>(null);
    const backMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

    // Animate opacity on mount
    useFrame((state, delta) => {
        const targetOpacity = 1;
        const speed = 2.5; // Fade speed

        if (frameMaterialRef.current) {
            frameMaterialRef.current.opacity = THREE.MathUtils.lerp(frameMaterialRef.current.opacity, targetOpacity, delta * speed);
        }
        if (cellMaterialRef.current) {
            cellMaterialRef.current.opacity = THREE.MathUtils.lerp(cellMaterialRef.current.opacity, targetOpacity, delta * speed);
        }
        if (backMaterialRef.current) {
            backMaterialRef.current.opacity = THREE.MathUtils.lerp(backMaterialRef.current.opacity, targetOpacity, delta * speed);
        }
    });

    // Procedural Texture Generation for "Blue with White Squares"
    const texture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            // White/Silver background for grid lines
            ctx.fillStyle = '#d1d1d1';
            ctx.fillRect(0, 0, 512, 512);

            // Deep Blue Cells
            ctx.fillStyle = '#002266';

            const cols = 6;
            const rows = 4;
            const gap = 6; // Thickness of grid lines
            const cellW = (512 - (cols + 1) * gap) / cols;
            const cellH = (512 - (rows + 1) * gap) / rows;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    ctx.fillRect(
                        gap + i * (cellW + gap),
                        gap + j * (cellH + gap),
                        cellW,
                        cellH
                    );
                }
            }
        }
        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(2, 1);
        tex.anisotropy = 16;
        return tex;
    }, []);

    return (
        <group {...props} dispose={null}>
            {/* Frame */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[width, height, frameThickness]} />
                <meshStandardMaterial
                    ref={frameMaterialRef}
                    color="#1a1a1a"
                    roughness={0.5}
                    metalness={0.8}
                    transparent
                    opacity={0}
                />
            </mesh>

            {/* Solar Cells Surface - Highly Reflective */}
            <mesh position={[0, 0, frameThickness / 2 + 0.005]}>
                <planeGeometry args={[width - 0.2, height - 0.2]} />
                <meshPhysicalMaterial
                    ref={cellMaterialRef}
                    map={texture}
                    color="#ffffff"
                    roughness={0.05}
                    metalness={0.3}
                    reflectivity={1.0}
                    clearcoat={1.0}
                    clearcoatRoughness={0.05}
                    envMapIntensity={2.5}
                    transparent
                    opacity={0}
                />
            </mesh>

            {/* Optional: Add metallic stand/back if visible */}
            <mesh position={[0, 0, -0.1]}>
                <boxGeometry args={[width * 0.9, height * 0.9, 0.05]} />
                <meshStandardMaterial
                    ref={backMaterialRef}
                    color="#333"
                    transparent
                    opacity={0}
                />
            </mesh>
        </group>
    );
}
