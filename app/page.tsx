import AboutSection from '@/components/sections/AboutSection';
import PublicationsSection from '@/components/sections/PublicationsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import NewsSection from '@/components/sections/NewsSection';
import ToolsSection from '@/components/sections/ToolsSection';
import TalksSection from '@/components/sections/TalksSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="max-w-[760px] xl:max-w-[900px] qhd:max-w-[1100px] mx-auto px-6 py-12 space-y-16">
      <AboutSection />
      <PublicationsSection />
      <ProjectsSection />
      <NewsSection />
      <ToolsSection />
      <TalksSection />
      <ContactSection />
    </div>
  );
}
