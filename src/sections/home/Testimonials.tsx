import { SectionHeader } from '@/components/ui/SectionHeader';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "GEMS Academy has transformed my child. The balance between academics and extracurriculars is perfect.",
        author: "Mrs. Sharma",
        role: "Mother of Grade 5 Student",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        text: "The teachers are incredibly supportive and the infrastructure is world-class. Best decision for our son.",
        author: "Mr. Rajesh Kumar",
        role: "Father of Grade 8 Student",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        text: "I love the diverse learning environment. Every day is a new opportunity to learn something beyond books.",
        author: "Priya Singh",
        role: "Alumni, Class of 2023",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        text: "Safety was our primary concern, and GEMS exceeded our expectations with their vigilant system.",
        author: "Dr. Anitha",
        role: "Mother of Kindergarten Student",
        image: "https://randomuser.me/api/portraits/women/12.jpg"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
                <SectionHeader title="What Parents Say" subtitle="Real stories from our school community." />

                {/* Scroll Snap Container */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="snap-center shrink-0 w-[90%] md:w-[400px] bg-white p-8 rounded-xl shadow-sm border border-neutral-100 relative group"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

                            <p className="text-neutral-600 mb-8 leading-relaxed italic relative z-10">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-neutral-900">{testimonial.author}</h4>
                                    <p className="text-xs text-neutral-500 uppercase tracking-wide">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
