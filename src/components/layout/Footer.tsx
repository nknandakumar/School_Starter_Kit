import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
    quick: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Events', href: '/events' },
    ],
    academics: [
        { name: 'Kindergarten', href: '/academics#kindergarten' },
        { name: 'Primary School', href: '/academics#primary' },
        { name: 'High School', href: '/academics#high-school' },
        { name: 'Results', href: '/achievements' },
    ],
    admissions: [
        { name: 'Admissions Process', href: '/admissions' },
        { name: 'School Fees', href: '/admissions#fees' },
        { name: 'FAQs', href: '/admissions#faq' },
    ],
    community: [
        { name: 'Alumni', href: '#' },
        { name: 'Parents', href: '#' },
        { name: 'Students', href: '#' },
    ]
};

export const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 border-t border-neutral-800">
            <div className="container mx-auto px-4">

                {/* Top Section: Logo & Contact */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12 border-b border-neutral-800">
                    <div className="shrink-0">
                        <Logo className="text-white scale-110 origin-left" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-neutral-400">
                        <div className="flex items-start gap-3 max-w-xs">
                            <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                            <span>123 Education Lane, Academic City, State 560000</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>admissions@school.edu</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">

                    {/* Column 1 */}
                    <div>
                        <h3 className="text-white font-heading font-semibold mb-6">About Us</h3>
                        <ul className="space-y-3">
                            {footerLinks.quick.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-white font-heading font-semibold mb-6">Academics</h3>
                        <ul className="space-y-3">
                            {footerLinks.academics.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-white font-heading font-semibold mb-6">Admissions</h3>
                        <ul className="space-y-3">
                            {footerLinks.admissions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-white font-heading font-semibold mb-6">Community</h3>
                        <ul className="space-y-3">
                            {footerLinks.community.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Socials */}
                <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex flex-col items-center md:items-start gap-2 text-xs text-neutral-500">
                        <p>&copy; {new Date().getFullYear()} School Starter Kit. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link href="/privacy" className="hover:text-neutral-300">Privacy Policy</Link>
                            <span>|</span>
                            <Link href="/terms" className="hover:text-neutral-300">Terms & Conditions</Link>
                            <span>|</span>
                            <Link href="/disclaimer" className="hover:text-neutral-300">Disclaimer</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 hover:bg-secondary hover:text-white transition-colors duration-300">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 hover:bg-secondary hover:text-white transition-colors duration-300">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 hover:bg-secondary hover:text-white transition-colors duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 hover:bg-secondary hover:text-white transition-colors duration-300">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};
