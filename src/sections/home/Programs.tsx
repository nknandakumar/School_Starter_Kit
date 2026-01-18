import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';

const programs = [
    {
        title: 'Nursery',
        grade: 'Play Home, LKG, UKG',
        desc: 'A nurturing environment where little ones explore, play, and grow.',
        image: 'https://i.pinimg.com/736x/36/66/eb/3666eba986cabef1dfc976b4d8d3bc9c.jpg',
    },
    {
        title: 'Junior School',
        grade: 'Grade: 1st - 5th',
        desc: 'Cultivating a love for learning through engaging core subjects.',
        image: 'https://i.pinimg.com/1200x/32/1a/04/321a04abe283abf817045d0a0f60b077.jpg',
    },
    {
        title: 'Secondary School',
        grade: 'Grade: 6th - 7th',
        desc: 'Inspiring curiosity, instilling discipline, and refining articulation.',
        image: 'https://i.pinimg.com/1200x/94/22/3c/94223cb1ea3f6cd053905a4d7584a94d.jpg',
    }
];

export const Programs = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Academic Programs"
                    subtitle="A structured learning journey for every stage of development."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
                    {programs.map((program, idx) => (
                        <div key={idx} className="group flex flex-col bg-transparent cursor-pointer">
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-3xl h-[300px] md:h-[350px] mb-6 shadow-sm">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col px-2">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary">{program.title}</h3>
                                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-accent-yellow flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-2">
                                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={2.5} />
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-muted-foreground/80 mb-3 block">{program.grade}</span>
                                <p className="text-neutral-600 leading-relaxed text-base md:text-lg">
                                    {program.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
