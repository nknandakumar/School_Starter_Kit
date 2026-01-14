import { SectionHeader } from '@/components/ui/SectionHeader';

const images = [
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577896335477-023c53014438?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1427504746074-be478366e585?q=80&w=2066&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
];

export default function GalleryPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-neutral-900 text-white py-20">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold">Photo Gallery</h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Capturing moments of learning, joy, and growth.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Simple Masonry-like Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((src, idx) => (
                            <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                                <img
                                    src={src}
                                    alt={`Gallery Image ${idx + 1}`}
                                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
