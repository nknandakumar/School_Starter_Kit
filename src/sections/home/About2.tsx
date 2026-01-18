'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, Flip, EasePack } from 'gsap/all';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger, Flip, EasePack);

export const About2 = () => {
    const galleryCallbackRef = useRef<HTMLDivElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const gallery = galleryCallbackRef.current;
        const wrap = wrapRef.current;
        if (!gallery || !wrap) return;

        // Ensure we clean up any previous ScrollTriggers or animations
        const ctx = gsap.context(() => {
            const galleryItems = gallery.querySelectorAll('.gallery__item');

            // Defines the state we want to animate TO
            // We temporarily add the final class, capture state, remove it, then animate to it.
            gallery.classList.add('gallery--final');
            const flipState = Flip.getState(galleryItems);
            gallery.classList.remove('gallery--final');

            const flip = Flip.to(flipState, {
                simple: true,
                ease: "expoScale(1, 5)",
                duration: 1,  // Duration doesn't matter much with scrub: true on a timeline,
                // but it defines the length relative to scroll distance if using seconds.
            });

            ScrollTrigger.create({
                trigger: gallery,
                start: 'center center',
                end: '+=100%',
                scrub: true,
                pin: wrap,
                animation: flip,
                // markers: true,
            });
        }, wrap); // Scope to wrap

        return () => ctx.revert();
    }, []);

    const images = [
        "https://assets.codepen.io/16327/portrait-pattern-1.jpg",
        "https://assets.codepen.io/16327/portrait-image-12.jpg",
        "https://i.pinimg.com/1200x/da/0b/8a/da0b8a73587be2b85df3a6d62ad22f67.jpg",
        "https://assets.codepen.io/16327/portrait-pattern-2.jpg",
        "https://assets.codepen.io/16327/portrait-image-4.jpg",
        "https://assets.codepen.io/16327/portrait-image-3.jpg",
        "https://assets.codepen.io/16327/portrait-pattern-3.jpg",
        "https://assets.codepen.io/16327/portrait-image-1.jpg"
    ];

    return (
        <section className="relative w-full">
            <style jsx>{`
                .gallery-wrap {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                
                .gallery {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex: none;
                }
                
                .gallery__item {
                    background-position: 50% 50%;
                    background-size: cover;
                    flex: none;
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .gallery__item img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    display: block;
                }
                
                /* Default / Desktop Styles */
                .gallery--bento {
                    display: grid;
                    gap: 1vh;
                    grid-template-columns: repeat(3, 32.5vw);
                    grid-template-rows: repeat(4, 23vh);
                    justify-content: center;
                    align-content: center;
                }
                
                .gallery--final.gallery--bento {
                    grid-template-columns: repeat(3, 100vw);
                    grid-template-rows: repeat(4, 49.5vh);
                    gap: 1vh;
                }
                
                /* Desktop Grid Areas */
                @media (min-width: 768px) {
                    .gallery--bento .gallery__item:nth-child(1) { grid-area: 1 / 1 / 3 / 2; }
                    .gallery--bento .gallery__item:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
                    .gallery--bento .gallery__item:nth-child(3) { grid-area: 2 / 2 / 4 / 3; }
                    .gallery--bento .gallery__item:nth-child(4) { grid-area: 1 / 3 / 3 / 3; }
                    .gallery--bento .gallery__item:nth-child(5) { grid-area: 3 / 1 / 3 / 2; }
                    .gallery--bento .gallery__item:nth-child(6) { grid-area: 3 / 3 / 5 / 4; }
                    .gallery--bento .gallery__item:nth-child(7) { grid-area: 4 / 1 / 5 / 2; }
                    .gallery--bento .gallery__item:nth-child(8) { grid-area: 4 / 2 / 5 / 3; }
                }

                /* Mobile Styles */
                @media (max-width: 767px) {
                    .gallery-wrap {
                        height: 100vh;
                        padding: 0;
                        overflow: hidden;
                    }

                    .gallery--bento {
                        height: 100%;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        grid-template-rows: repeat(3, 1fr); /* 3 equal rows to fill viewport */
                        gap: 10px;
                        padding: 10px;
                    }
                    
                    /* Final State: Vertical Stack of zoomed images */
                    .gallery--final.gallery--bento {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: repeat(5, 70vh); /* Each image takes 70% viewport height */
                        gap: 10px;
                        height: auto; /* Allow layout to expand for scrolling */
                        overflow: visible;
                    }

                    /* 2-1-2 Layout logic for visual viewport fit */
                    .gallery--bento .gallery__item:nth-child(1) { grid-column: span 1; }
                    .gallery--bento .gallery__item:nth-child(2) { grid-column: span 1; }
                    .gallery--bento .gallery__item:nth-child(3) { grid-column: span 2; } /* Center Wide */
                    .gallery--bento .gallery__item:nth-child(4) { grid-column: span 1; }
                    .gallery--bento .gallery__item:nth-child(5) { grid-column: span 1; }
                    
                    /* Hide remaining items on mobile */
                    .gallery--bento .gallery__item:nth-child(n+6) {
                        display: none;
                    }
                    
                    .gallery__item img {
                        height: 100%;
                        object-fit: cover;
                    }
                }`}</style>

            <div className="gallery-wrap" ref={wrapRef}>
                <div className="gallery gallery--bento" id="gallery-8" ref={galleryCallbackRef}>
                    {images.map((src, i) => (
                        <div className="gallery__item" key={i}>
                            <img src={src} alt={`Gallery Item ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto space-y-8 text-neutral-600">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">Here is some content</h2>
                    <p className="text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </section>
    );
};
