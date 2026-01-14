import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldCheck, BookOpen, UserCheck, Microscope } from 'lucide-react';

const features = [
    {
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        title: 'Academic Excellence',
        desc: 'Rigorous curriculum designed to challenge and inspire students to achieve their best potential.'
    },
    {
        icon: <UserCheck className="w-8 h-8 text-primary" />,
        title: 'Discipline & Values',
        desc: 'Instilling strong moral values, ethics, and self-discipline in every student.'
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: 'Safety & Security',
        desc: '24/7 CCTV surveillance, secured campus, and GPS-enabled transport for complete peace of mind.'
    },
    {
        icon: <Microscope className="w-8 h-8 text-primary" />,
        title: 'Modern Infrastructure',
        desc: 'State-of-the-art labs, smart classrooms, and extensive sports facilities.'
    }
];

export const WhyJoinUs = () => {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Why Choose GEMS Academy"
                    subtitle="We provide an environment where every student thrives."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100 group">
                            <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                            <p className="text-neutral-600 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
