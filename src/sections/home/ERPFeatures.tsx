import { SectionHeader } from '@/components/ui/SectionHeader';
import { Smartphone, CalendarCheck, BarChart3, MessageCircle } from 'lucide-react';

const erpFeatures = [
    {
        icon: <CalendarCheck className="w-6 h-6 text-white" />,
        title: 'Smart Attendance',
        desc: 'Real-time attendance tracking with instant SMS notifications to parents.',
        color: 'bg-primary'
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        title: 'Performance Analytics',
        desc: 'Detailed insights into student progress, marks, and areas of improvement.',
        color: 'bg-secondary'
    },
    {
        icon: <MessageCircle className="w-6 h-6 text-white" />,
        title: 'Parent Communication',
        desc: 'Direct chat with teachers and seamless circular/homework updates.',
        color: 'bg-accent-lime'
    },
    {
        icon: <Smartphone className="w-6 h-6 text-white" />,
        title: 'Fee Management',
        desc: 'Secure online fee payments and automated receipt generation.',
        color: 'bg-neutral-800'
    }
];

export const ERPFeatures = () => {
    return (
        <section className="py-20 bg-neutral-900 text-white overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-800/30 skew-x-12 transform translate-x-20" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Technology Enabled Learning</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-6">
                            Smart School Management System
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                            We leverage cutting-edge technology to ensure transperency, safety, and
                            seamless communication between the school and parents. Access everything
                            at your fingertips.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {erpFeatures.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg shadow-lg ${feature.color}`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                                        <p className="text-sm text-neutral-400">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-2xl opacity-20 blur-xl" />
                        <img
                            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
                            alt="School App Dashboard"
                            className="rounded-2xl shadow-2xl border border-neutral-700 w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
