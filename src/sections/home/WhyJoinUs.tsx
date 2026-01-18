'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldCheck, BookOpen, UserCheck, Microscope, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const features = [
    {
        Icon: BookOpen,
        title: 'Academic Excellence',
        desc: 'Rigorous curriculum designed to challenge and inspire students to achieve their best potential.',
        image: 'https://i.pinimg.com/1200x/26/23/33/262333d37206a7a4f5666e4b8f4f175f.jpg'
    },
    {
        Icon: UserCheck,
        title: 'Discipline & Values',
        desc: 'Instilling strong moral values, ethics, and self-discipline in every student.',
        image: 'https://i.pinimg.com/736x/70/71/5f/70715f18308fe981fd8879a2e2d7ae6f.jpg'
    },
    {
        Icon: ShieldCheck,
        title: 'Safety & Security',
        desc: '24/7 CCTV surveillance, secured campus, and GPS-enabled transport for complete peace of mind.',
        image: 'https://i.pinimg.com/1200x/d0/a9/ff/d0a9ff167d667d9505f0caab44bc49fa.jpg'
    },
    {
        Icon: Microscope,
        title: 'Modern Infrastructure',
        desc: 'State-of-the-art labs, smart classrooms, and extensive sports facilities.',
        image: 'https://i.pinimg.com/1200x/08/5f/90/085f90c6334de8c725603175d1283f6a.jpg'
    }
];

// Duplicate features to create a seamless loop
const marqueeFeatures = [...features, ...features, ...features];

export const WhyJoinUs = () => {
    const [mobileIndex, setMobileIndex] = useState(0);

    const nextSlide = () => {
        setMobileIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setMobileIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    const MobileIcon = features[mobileIndex].Icon;

    return (
        <section className="py-20 bg-neutral-50 overflow-hidden">
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .marquee-container:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="container mx-auto px-4 mb-12">
                <SectionHeader
                    title="Why Choose GEMS Academy"
                    subtitle="We provide an environment where every student thrives."
                />
            </div>

            {/* Mobile Carousel (Visible only on mobile) */}
            <div className="block md:hidden container mx-auto px-4">
                <div className="w-full h-[500px] relative rounded-2xl overflow-hidden shadow-lg mb-8">
                    <img
                        src={features[mobileIndex].image}
                        alt={features[mobileIndex].title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 p-8 w-full z-10 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20">
                            <MobileIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-white uppercase mb-3 tracking-wide drop-shadow-sm">
                            {features[mobileIndex].title}
                        </h3>
                        <p className="text-neutral-300 text-sm leading-relaxed font-medium">
                            {features[mobileIndex].desc}
                        </p>
                    </div>
                </div>

                {/* Mobile Controls */}
                <div className="flex items-center justify-between px-4">
                    <Button
                        onClick={prevSlide}
                        variant="outline"
                        size="icon"
                        className="rounded-xl w-12 h-12 border-neutral-300 hover:bg-neutral-100 shadow-sm"
                    >
                        <ChevronLeft className="w-6 h-6 text-neutral-600" />
                    </Button>

                    <div className="flex gap-2.5">
                        {features.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMobileIndex(idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${idx === mobileIndex ? 'w-8 bg-red-500' : 'w-2.5 bg-neutral-900'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <Button
                        onClick={nextSlide}
                        variant="outline"
                        size="icon"
                        className="rounded-xl w-12 h-12 border-neutral-300 hover:bg-neutral-100 shadow-sm"
                    >
                        <ChevronRight className="w-6 h-6 text-neutral-600" />
                    </Button>
                </div>
            </div>

            {/* Desktop Marquee (Hidden on mobile) */}
            <div className="hidden md:block relative w-full overflow-hidden marquee-container">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

                <div className="flex gap-8 w-max animate-marquee pl-4">
                    {marqueeFeatures.map((feature, idx) => (
                        <div
                            key={idx}
                            className="w-[300px] md:w-[400px] h-[450px] relative rounded-2xl overflow-hidden flex-shrink-0 group cursor-default shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            {/* Background Image with Zoom Effect */}
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                {/* Icon */}
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20">
                                    <feature.Icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold font-heading text-white uppercase mb-3 tracking-wide drop-shadow-sm">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-300 text-sm leading-relaxed font-medium line-clamp-3">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
