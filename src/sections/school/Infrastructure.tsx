import { SectionHeader } from '@/components/ui/SectionHeader';

const facilities = [
    {
        title: 'Smart Classrooms',
        desc: 'Equipped with interactive whiteboards and digital learning tools.',
        image: 'https://images.unsplash.com/photo-1577896335477-023c53014438?q=80&w=1974&auto=format&fit=crop'
    },
    {
        title: 'Science Laboratories',
        desc: 'Fully equipped Physics, Chemistry, and Biology labs for practical learning.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Library',
        desc: 'A vast collection of books, journals, and digital resources.',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop'
    },
    {
        title: 'Sports Complex',
        desc: 'Basketball courts, cricket ground, and swimming pool.',
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop'
    },
    {
        title: 'Computer Lab',
        desc: 'High-speed internet enabled systems for coding and research.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Transport',
        desc: 'Safe and GPS-enabled fleet of buses covering all major routes.',
        image: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop'
    },
];

export const Infrastructure = () => {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4">
                <SectionHeader title="Infrastructure" subtitle="State-of-the-art facilities for a conducive learning environment." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((fac, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={fac.image}
                                    alt={fac.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold font-heading mb-2">{fac.title}</h3>
                                <p className="text-neutral-600 text-sm">{fac.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
