import { SectionHeader } from '@/components/ui/SectionHeader';

const milestones = [
    { year: '1998', title: 'Foundation', desc: 'Established with a vision to provide quality education with just 50 students.' },
    { year: '2005', title: 'Campus Expansion', desc: 'Moved to a new 5-acre eco-friendly campus with modern facilities.' },
    { year: '2012', title: 'CBSE Affiliation', desc: 'Received affiliation from Central Board of Secondary Education, New Delhi.' },
    { year: '2018', title: 'Technology Integration', desc: 'Implemented smart classrooms and digital learning management systems.' },
    { year: '2023', title: 'Silver Jubilee', desc: 'Celebrated 25 years of excellence in education and holistic development.' },
];

export const History = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeader title="Our Journey" subtitle="Tracing our path from humble beginnings to educational excellence." />

                <div className="relative max-w-4xl mx-auto">
                    {/* Center Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200" />

                    <div className="space-y-12">
                        {milestones.map((milestone, idx) => (
                            <div key={idx} className={`flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                {/* Content */}
                                <div className={`w-1/2 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <h3 className="text-2xl font-bold font-heading text-primary">{milestone.year}</h3>
                                    <h4 className="text-xl font-bold text-neutral-800 mb-2">{milestone.title}</h4>
                                    <p className="text-neutral-600 text-sm leading-relaxed">{milestone.desc}</p>
                                </div>

                                {/* Dot */}
                                <div className="relative z-10 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-md mx-auto shrink-0" />

                                {/* Spacer */}
                                <div className="w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
