import { SectionHeader } from '@/components/ui/SectionHeader';
import { Trophy, Medal, Star } from 'lucide-react';

const achievements = {
    academic: [
        { title: 'District Topper (Grade 10)', desc: 'Secured 98.5% in CBSE Board Exams', year: '2023', icon: <Star className="w-6 h-6 text-yellow-500" /> },
        { title: 'Science Olympiad', desc: 'Gold Medal in International Science Olympiad', year: '2023', icon: <Medal className="w-6 h-6 text-yellow-500" /> },
        { title: 'Best School Award', desc: 'Ranked #1 in North Bangalore by Education Today', year: '2022', icon: <Trophy className="w-6 h-6 text-yellow-500" /> },
    ],
    sports: [
        { title: 'State Level Football', desc: 'Winners of the U-16 State Championship', year: '2023', icon: <Trophy className="w-6 h-6 text-primary" /> },
        { title: 'Inter-School Athletics', desc: 'Overall Championship Trophy', year: '2023', icon: <Medal className="w-6 h-6 text-primary" /> },
    ]
};

export default function AchievementsPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold">Achievements</h1>
                    <p className="text-xl text-neutral-100 max-w-2xl mx-auto">
                        Celebrating excellence in academics, sports, and beyond.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader title="Academic Excellence" subtitle="Consistent top performance in board exams and competitions." />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {achievements.academic.map((item, idx) => (
                            <div key={idx} className="bg-neutral-50 p-8 rounded-xl border border-neutral-100 text-center hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    {item.icon}
                                </div>
                                <span className="inline-block px-3 py-1 bg-neutral-200 rounded-full text-xs font-bold text-neutral-600 mb-4">{item.year}</span>
                                <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                                <p className="text-neutral-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <SectionHeader title="Sports & Co-curricular" subtitle="Nurturing champions on the field." />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {achievements.sports.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-neutral-100 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-4 bg-primary/10 rounded-lg">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-heading mb-1">{item.title}</h4>
                                    <p className="text-neutral-600 text-sm mb-2">{item.desc}</p>
                                    <span className="inline-block px-2 py-0.5 bg-neutral-100 text-neutral-500 text-xs rounded font-medium">{item.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
