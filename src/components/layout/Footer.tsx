import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
    quick: [
        { name: 'About Us', href: '/about' },
        { name: 'Academics', href: '/academics' },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Careers', href: '/careers' },
    ],
    academics: [
        { name: 'Kindergarten', href: '/academics#kindergarten' },
        { name: 'Primary School', href: '/academics#primary' },
        { name: 'High School', href: '/academics#high-school' },
        { name: 'Results', href: '/achievements' },
    ],
};

export const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Logo className="text-white" />
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Empowering students to become global leaders through academic excellence,
                            strong values, and holistic development.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-heading font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {footerLinks.quick.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-secondary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academics */}
                    <div>
                        <h3 className="text-white font-heading font-semibold mb-6">Academics</h3>
                        <ul className="space-y-4">
                            {footerLinks.academics.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-secondary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-heading font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <span>123 Education Lane, Academic City, State 560000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>admissions@school.edu</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} School Starter Kit. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
