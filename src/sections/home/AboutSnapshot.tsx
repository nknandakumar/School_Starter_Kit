import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const AboutSnapshot = () => {
    return (
        <section className="py-20 mx-6 bg-white">
            {/* Header Section */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <div className="text-center mb-10 max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
                            A Legacy of Excellence <span className="text-[#f39200]">in Education</span>
                        </h2>
                        <p className="text-lg text-neutral-600 font-medium">
                            Academics Thrive, Facilities Excel, and Memories Flourish!
                        </p>
                    </div>
                </div>
            </div>

            {/* Video Section - Full Width */}
            <div className="w-full relative z-0">
                <video
                    src="https://ik.imagekit.io/6b0su29zd/%20shri%20Lakshmi%20Public%20school/From%20KlickPin%20CF%20_Video_%20ENT%20Infinite%20Zoom%20School%20_%20Seni%20musikvaluable826.mp4"
                    className="w-full h-[600px] md:h-[600px] object-cover shadow-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                />
            </div>

            {/* Overlapping Content Card */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-7xl -mt-24 relative z-10">
                        <div className="bg-[#f39200] rounded-2xl shadow-xl p-8 md:p-12 text-white">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Text Content */}
                                <div className="flex-1 space-y-6">
                                    <p className="text-lg leading-relaxed font-medium opacity-95">
                                        At GEMS Academy, we believe in nurturing the whole child. Founded in 1998, we have established
                                        ourselves as a premier institution dedicated to academic brilliance and character formation.
                                        Our diverse community fosters a culture of inclusivity and global awareness.
                                    </p>

                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <CheckCircle2 className="w-6 h-6 shrink-0 text-white" />
                                            <span className="font-medium">Affiliated with CBSE Board (New Delhi)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckCircle2 className="w-6 h-6 shrink-0 text-white" />
                                            <span className="font-medium">Award-winning "Best Holistic Education" 2024</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckCircle2 className="w-6 h-6 shrink-0 text-white" />
                                            <span className="font-medium">15:1 Student-Teacher Ratio</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* CTA / Side Content */}
                                <div className="md:w-1/3 flex flex-col justify-center items-center md:items-end gap-6 text-center md:text-right">
                                    <div>
                                        <p className="text-5xl font-bold mb-2">25+</p>
                                        <p className="text-lg font-medium opacity-90">Years of Excellence</p>
                                    </div>
                                    <Button
                                        size="lg"
                                        className="bg-white text-[#f39200] hover:bg-neutral-100 border-none min-w-[160px]"
                                    >
                                        Read Our Story
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
