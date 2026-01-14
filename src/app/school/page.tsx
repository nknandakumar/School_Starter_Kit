import { Infrastructure } from '@/sections/school/Infrastructure';
import { Timings } from '@/sections/school/Timings';

export default function SchoolPage() {
    return (
        <div className="flex flex-col">
            {/* Hero/Header */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold">Our Campus</h1>
                    <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
                        A safe, modern, and inspiring environment tailored for learning.
                    </p>
                </div>
            </section>

            <Infrastructure />
            <Timings />
        </div>
    );
}
