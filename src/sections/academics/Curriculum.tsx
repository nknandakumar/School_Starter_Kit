import { SectionHeader } from '@/components/ui/SectionHeader';
import { Book, Code, Calculator, Globe, Music, Palette } from 'lucide-react';

const levels = [
    {
        title: 'Kindergarten (KG)',
        grades: 'Nursery - KG 2',
        subjects: ['Play-based Learning', 'Social Skills', 'Basic Literacy', 'Arts & Crafts'],
        methodology: 'Montessori & Play-way method',
        color: 'bg-accent-lime'
    },
    {
        title: 'Primary Stage',
        grades: 'Grade 1 - 5',
        subjects: ['English', 'Mathematics', 'EVS', 'Second Language', 'Computer Science'],
        methodology: 'Activity-based learning',
        color: 'bg-accent-yellow'
    },
    {
        title: 'Middle Stage',
        grades: 'Grade 6 - 8',
        subjects: ['Science', 'Social Science', 'Mathematics', 'Three Languages', 'Coding'],
        methodology: 'Experiential & Project-based',
        color: 'bg-secondary'
    },
    {
        title: 'Secondary Stage',
        grades: 'Grade 9 - 10',
        subjects: ['Core Subjects', 'Information Technology', 'HPE', 'Art Integration'],
        methodology: 'Competency-based education (CBSE)',
        color: 'bg-primary'
    }
];

export const Curriculum = () => {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4">
                <SectionHeader title="Academic Curriculum" subtitle="A structured pathway for holistic development." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {levels.map((level, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className={`w-12 h-1 bg-gradient-to-r from-${level.color.replace('bg-', '')} to-transparent mb-4 rounded-full`} />
                            <h3 className="text-2xl font-bold font-heading mb-1">{level.title}</h3>
                            <p className="text-neutral-500 text-sm font-medium mb-6 uppercase tracking-wider">{level.grades}</p>

                            <div className="space-y-4 mb-6 flex-grow">
                                <h4 className="font-semibold text-neutral-900 border-b pb-2">Key Subjects</h4>
                                <div className="flex flex-wrap gap-2">
                                    {level.subjects.map((subj, i) => (
                                        <span key={i} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-xs font-medium">
                                            {subj}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-neutral-50 p-4 rounded-lg">
                                <p className="text-sm text-neutral-600">
                                    <span className="font-semibold text-primary">Methodology:</span> {level.methodology}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
