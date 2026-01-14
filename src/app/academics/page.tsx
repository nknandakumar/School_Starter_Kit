import { Curriculum } from '@/sections/academics/Curriculum';
import { Assessment } from '@/sections/academics/Assessment';

export default function AcademicsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero/Header */}
            <section className="bg-neutral-900 text-white py-20">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold">Academics</h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Striving for excellence through a balanced and rigorous curriculum.
                    </p>
                </div>
            </section>

            <Curriculum />
            <Assessment />
        </div>
    );
}
