"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'School', href: '/school' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on path change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const isHome = pathname === '/';

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || !isHome || isMobileMenuOpen
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Logo className={cn(
                    "transition-colors",
                    isScrolled || !isHome || isMobileMenuOpen ? "text-primary" : "text-white"
                )} />

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-secondary",
                                isScrolled || !isHome
                                    ? "text-neutral-700"
                                    : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        variant={isScrolled || !isHome ? 'primary' : 'secondary'}
                        size="sm"
                        className="ml-4"
                    >
                        Apply Now
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-neutral-800" />
                    ) : (
                        <Menu className={cn(
                            "w-6 h-6",
                            isScrolled || !isHome ? "text-neutral-800" : "text-white"
                        )} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-neutral-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-neutral-700 font-medium py-2 border-b border-neutral-50 last:border-0 hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-2">Apply Now</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
