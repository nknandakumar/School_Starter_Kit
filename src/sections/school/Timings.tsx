import { SectionHeader } from '@/components/ui/SectionHeader';
import { Clock } from 'lucide-react';

const timings = [
    {
        level: 'Kindergarten',
        time: '09:00 AM - 12:30 PM',
        days: 'Monday to Friday'
    },
    {
        level: 'Primary (Grade 1-5)',
        time: '08:30 AM - 02:45 PM',
        days: 'Monday to Friday'
    },
    {
        level: 'Middle & High School',
        time: '08:30 AM - 03:00 PM',
        days: 'Monday to Saturday (Half day)'
    },
];

export const Timings = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <SectionHeader title="School Hours" />

                <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
                    <div className="space-y-6">
                        {timings.map((t, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                                <div className="mb-2 md:mb-0 text-center md:text-left">
                                    <h4 className="font-bold text-lg text-neutral-900">{t.level}</h4>
                                    <p className="text-xs text-neutral-500">{t.days}</p>
                                </div>
                                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg text-primary font-medium">
                                    <Clock className="w-4 h-4" />
                                    {t.time}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-neutral-500">
                            * Office hours are 8:00 AM to 4:00 PM on all working days.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
