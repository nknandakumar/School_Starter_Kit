import { Hero } from '@/sections/home/Hero';
import { Stats } from '@/sections/home/Stats';
import { AboutSnapshot } from '@/sections/home/AboutSnapshot';
import { About2 } from '@/sections/home/About2';
import { WhyJoinUs } from '@/sections/home/WhyJoinUs';
import { Programs } from '@/sections/home/Programs';
import { ERPFeatures } from '@/sections/home/ERPFeatures';
import { Testimonials } from '@/sections/home/Testimonials';
import { GalleryPreview } from '@/sections/home/GalleryPreview';
import { FAQ } from '@/sections/home/FAQ';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSnapshot />
      <Stats />

      <WhyJoinUs />
      <Programs />
      <ERPFeatures />
      <Testimonials />
      <GalleryPreview />
      <FAQ />
    </div>
  );
}
