import { Target, Compass } from 'lucide-react';

export const Vision = () => {
    return (
        <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Mission */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                        <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-heading font-bold mb-4">Our Mission</h3>
                        <p className="text-lg text-neutral-200 leading-relaxed">
                            To provide a safe and stimulating learning environment where students are challenged
                            to reach their full potential. We strive to foster critical thinking, creativity,
                            and a lifelong love for learning in every child.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                        <div className="bg-accent-yellow w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                            <Compass className="w-6 h-6 text-neutral-900" />
                        </div>
                        <h3 className="text-3xl font-heading font-bold mb-4">Our Vision</h3>
                        <p className="text-lg text-neutral-200 leading-relaxed">
                            To empower students to become responsible global citizens who contribute positively
                            to society. We envision a community where values, integrity, and innovation
                            drive academic and personal success.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
