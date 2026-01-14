import { Quote } from 'lucide-react';

export const Management = () => {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    {/* Image */}
                    <div className="w-full md:w-1/3 relative">
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-secondary rounded-xl -z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
                            alt="Principal"
                            className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[3/4]"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-2/3 space-y-6">
                        <div className="text-primary mb-4">
                            <Quote className="w-12 h-12 opacity-20" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900">
                            Message from the Principal
                        </h2>

                        <p className="text-lg text-neutral-600 leading-relaxed italic">
                            "Education is not just about filling a bucket, but lighting a fire. At GEMS Academy,
                            we are dedicated to igniting the curiosity and passion within every student. Our holistic
                            approach ensures that academic excellence goes hand in hand with character development.
                            We invite you to join our vibrant community and experience the joy of learning."
                        </p>

                        <div>
                            <h4 className="text-xl font-bold text-primary">Dr. Sarah Johnson</h4>
                            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide">Principal, PhD in Education</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
