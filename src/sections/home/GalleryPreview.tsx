import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

const galleryImages = [
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop", // Campus
    "https://images.unsplash.com/photo-1577896335477-023c53014438?q=80&w=1974&auto=format&fit=crop", // Library
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop", // Class
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", // Friends
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop", // Study
];

export const GalleryPreview = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <SectionHeader title="Campus Life" subtitle="A glimpse into the daily life at GEMS Academy." />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[500px] mb-12">
                    {/* Main large image */}
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
                        <img
                            src={galleryImages[0]}
                            alt="Main Gallery"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </div>

                    {/* Smaller images */}
                    {galleryImages.slice(1).map((img, idx) => (
                        <div key={idx} className="rounded-2xl overflow-hidden relative group h-[240px] md:h-auto">
                            <img
                                src={img}
                                alt={`Gallery ${idx}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                <Button variant="outline" size="lg">View Full Gallery</Button>
            </div>
        </section>
    );
};
