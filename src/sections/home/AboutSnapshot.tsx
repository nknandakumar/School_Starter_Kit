import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const AboutSnapshot = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-secondary/10 rounded-2xl transform rotate-3 -z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1544531696-60c7f2010886?q=80&w=2070&auto=format&fit=crop"
                            alt="Students Learning"
                            className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
                        />
                        <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                            <p className="text-4xl font-bold text-primary mb-1">25+</p>
                            <p className="text-sm font-medium text-neutral-600">Years of Excellence</p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 leading-tight">
                            A Legacy of Excellence in <span className="text-primary">Education</span>
                        </h2>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            At GEMS Academy, we believe in nurturing the whole child. Founded in 1998, we have established
                            ourselves as a premier institution dedicated to academic brilliance and character formation.
                            Our diverse community fosters a culture of inclusivity and global awareness.
                        </p>

                        <ul className="space-y-4 pt-2">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                                <span className="text-neutral-700 font-medium">Affiliated with CBSE Board (New Delhi)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                                <span className="text-neutral-700 font-medium">Award-winning "Best Holistic Education" 2024</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                                <span className="text-neutral-700 font-medium">15:1 Student-Teacher Ratio</span>
                            </li>
                        </ul>

                        <div className="pt-6">
                            <Button size="lg" className="min-w-[160px]">Read Our Story</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
