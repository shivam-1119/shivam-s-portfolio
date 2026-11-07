import { useState, useEffect } from 'react';
import { SpaceBackground } from './components/Background/SpaceBackground';
import { Navbar } from './components/Navbar/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer/Footer';
import { AdminModal } from './components/Admin/AdminModal';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Check if system prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreUniverse = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#03030B] text-[#F8FAFC] selection:bg-purple-600 selection:text-white">
      {/* Initial Cinematic Intro Loader */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* 3D Cosmic Space Environment (Saturn, Rings, Stars, Meteors) */}
      <SpaceBackground reducedMotion={reducedMotion} />

      {/* Floating Glass Navigation */}
      <Navbar
        activeSection={activeSection}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion((prev) => !prev)}
      />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection onExploreClick={handleExploreUniverse} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAdmin={() => setAdminModalOpen(true)} />

      {/* Optional Admin Mission Control Modal */}
      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />
    </div>
  );
}

export default App;
