"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_IMAGES = [
    "https://i.pinimg.com/736x/65/b5/db/65b5db77cebd235fa3b643d08ec9b83d.jpg", // Campus
    "https://i.pinimg.com/1200x/37/b0/03/37b003811276655d429e53d17c2c6b05.jpg", // Building
   "https://i.pinimg.com/736x/67/f5/fa/67f5faa112a9241326ad8a2652dcc698.jpg", // Campus
    
];

export const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
            {/* Image Slider */}
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={currentIndex}
                    src={HERO_IMAGES[currentIndex]}
                    alt={`Hero Slide ${currentIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </AnimatePresence>

            {/* Overlay - lighter than before since there is no text to read, ensuring nav is visible but images pop */}
            <div className="absolute inset-0 bg-black/20 z-10" />
        </section>
    );
};
