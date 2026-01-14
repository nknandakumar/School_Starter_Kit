import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: 'left' | 'center' | 'right';
}

export const SectionHeader = ({ title, subtitle, className, align = 'center' }: SectionHeaderProps) => {
    return (
        <div className={cn("mb-12 space-y-4", align === 'center' && "text-center", align === 'right' && "text-right", className)}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className={cn(
                "h-1.5 w-20 bg-secondary rounded-full mt-4",
                align === 'center' && "mx-auto",
                align === 'right' && "ml-auto"
            )} />
        </div>
    );
};
