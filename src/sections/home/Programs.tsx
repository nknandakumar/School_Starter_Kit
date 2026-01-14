import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const programs = [
    {
        title: 'Kindergarten',
        age: 'Age 3-5 Years',
        desc: 'Play-based learning focusing on social skills and creativity.',
        image: 'https://images.unsplash.com/photo-1587653919097-aad817a5963f?q=80&w=1974&auto=format&fit=crop',
        color: 'bg-accent-lime'
    },
    {
        title: 'Primary School',
        age: 'Grade 1-5',
        desc: 'Building strong foundations in literacy, numeracy, and inquiry.',
        image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop',
        color: 'bg-accent-yellow'
    },
    {
        title: 'Middle School',
        age: 'Grade 6-8',
        desc: 'Encouraging independent thinking and subject mastery.',
        image: 'https://images.unsplash.com/photo-1577896335477-023c53014438?q=80&w=1974&auto=format&fit=crop',
        color: 'bg-secondary'
    },
    {
        title: 'High School',
        age: 'Grade 9-12',
        desc: 'Focused preparation for board exams and career paths.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=2073&auto=format&fit=crop',
        color: 'bg-primary'
    }
];

export const Programs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Academic Programs"
                    subtitle="A structured learning journey for every stage of development."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[400px]">
                            {/* Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6 text-white transform transition-transform">
                                <span className="inline-block py-1 px-3 bg-secondary rounded-full text-xs font-bold mb-3">
                                    {program.age}
                                </span>
                                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                                <p className="text-neutral-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {program.desc}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
