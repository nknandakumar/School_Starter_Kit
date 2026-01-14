import { SectionHeader } from '@/components/ui/SectionHeader';
import { History } from '@/sections/about/History';
import { Vision } from '@/sections/about/Vision';
import { Management } from '@/sections/about/Management';

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Page Hero */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold">About Us</h1>
                    <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
                        Discover who we are, where we came from, and where we are headed.
                    </p>
                </div>
            </section>

            <History />
            <Vision />
            <Management />
        </div>
    );
}
