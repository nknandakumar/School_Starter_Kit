import { cn } from '@/lib/utils';

const StarSeparator = () => (
    <div className="text-[#f39200] px-4">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 md:w-8 md:h-8"
        >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
    </div>
);

const StatItem = ({ number, label, className }: { number: string; label: string; className?: string }) => (
    <div className={cn("flex flex-col items-center text-center", className)}>
        <span className="text-4xl md:text-6xl font-heading font-bold text-primary mb-2">
            {number}
        </span>
        <span className="text-sm md:text-base text-neutral-600 font-medium uppercase tracking-wide">
            {label}
        </span>
    </div>
);

export const Stats = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-12 md:space-y-16">
                    {/* Top Row: 3 Items with separators */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 w-full max-w-5xl">
                        <StatItem number="30" label="Years Of Experience" className="md:flex-1" />

                        <div className="py-2 md:py-0"><StarSeparator /></div>

                        <StatItem number="95%" label="PARENT SATISFACTION RATE" className="md:flex-1" />

                        <div className="py-2 md:py-0"><StarSeparator /></div>

                        <StatItem number="20+" label="CO-CURRICULAR ACTIVITIES" className="md:flex-1" />
                    </div>

                    {/* Bottom Row: 2 Items with separator */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 w-full max-w-4xl">
                        <StatItem number="100%" label="EXAM SUCCESS RATE" className="md:flex-1" />

                        <div className="py-2 md:py-0"><StarSeparator /></div>

                        <StatItem number="1,00,000" label="STUDENTS" className="md:flex-1" />
                    </div>
                </div>
            </div>
        </section>
    );
};
