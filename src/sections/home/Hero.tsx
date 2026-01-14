import { Button } from '@/components/ui/Button';
import { ArrowRight, Calendar, Info } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for Cinematic Video/Image */}
                <div className="absolute inset-0 bg-neutral-900/60 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                    alt="School Campus"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20 text-center text-white space-y-8 max-w-4xl">
                <div className="space-y-4 animate-fade-in-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wide uppercase">
                        Admissions Open for 2026-27
                    </span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                        Empowering Minds, <br />
                        <span className="text-secondary">Shaping Futures.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed">
                        Welcome to <span className="font-semibold text-white">GEMS Academy</span>.
                        We provide a world-class education rooted in traditional values, preparing students
                        to lead with confidence in a globalized world.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button size="lg" className="min-w-[200px] text-lg h-12">
                        Apply for Admission
                    </Button>
                    <Button variant="outline" size="lg" className="min-w-[200px] text-lg h-12 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                        Schedule a Visit
                    </Button>
                </div>
            </div>

            {/* Bottom Features / FAQ Preview */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-neutral-900/80 to-transparent pt-20 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                            <div className="p-2 bg-secondary rounded-full">
                                <Info className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Why Choose Us?</h3>
                                <p className="text-xs text-neutral-300">Discover our legacy</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                            <div className="p-2 bg-secondary rounded-full">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Academic Calendar</h3>
                                <p className="text-xs text-neutral-300">View upcoming events</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                            <div className="p-2 bg-secondary rounded-full">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Virtual Tour</h3>
                                <p className="text-xs text-neutral-300">Explore the campus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
