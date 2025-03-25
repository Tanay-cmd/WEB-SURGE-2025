'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
}

const AnimatedTitle = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Create initial particles
        const initialParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
        }));
        setParticles(initialParticles);

        // Animation loop
        const animate = () => {
            setParticles(prevParticles =>
                prevParticles.map(particle => ({
                    ...particle,
                    x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
                    y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight,
                }))
            );
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <div className="relative w-full h-[200px] overflow-hidden">
            {/* Particles */}
            {particles.map(particle => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-white/20 rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        x: particle.x,
                        y: particle.y,
                    }}
                />
            ))}

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-bold text-center relative z-10 text-white"
            >
                Welcome to CodeForces
            </motion.h1>
        </div>
    );
};

export default AnimatedTitle; 