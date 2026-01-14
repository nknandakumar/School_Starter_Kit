import { SectionHeader } from '@/components/ui/SectionHeader';
import { FileCheck, CalendarClock, BookOpenCheck } from 'lucide-react';

export const Assessment = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeader title="Assessment & Evaluation" subtitle="Continuous and comprehensive evaluation for student growth." />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 border rounded-xl border-neutral-100 hover:border-primary transition-colors group">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <CalendarClock className="w-8 h-8 text-primary group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Periodic Assessments</h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            Regular unit tests and periodic assessments are conducted to track learning progress
                            and identify areas for improvement throughout the term.
                        </p>
                    </div>

                    <div className="text-center p-6 border rounded-xl border-neutral-100 hover:border-primary transition-colors group">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <FileCheck className="w-8 h-8 text-primary group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Term Evaluations</h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            Summative assessments at the end of each term (Half-yearly and Annual) to evaluate
                            comprehensive understanding of the curriculum.
                        </p>
                    </div>

                    <div className="text-center p-6 border rounded-xl border-neutral-100 hover:border-primary transition-colors group">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <BookOpenCheck className="w-8 h-8 text-primary group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Holistic Report</h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            Report cards include not just academic scores, but also evaluation of
                            co-curricular activities, discipline, and social skills.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
