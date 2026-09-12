/* ─────────────────────────────────────────────────────────────
   Navbar — Dynamic Island Floating Navigation
   Apple-inspired Liquid Glass floating bar with smooth scroll,
   active section indicator, and prominent "Descargar CV" CTA.
   ───────────────────────────────────────────────────────────── */

import { useState, useEffect } from 'react';
import { Download, Menu, X, Sparkles } from 'lucide-react';
import ModernButton from './ModernButton';

interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavLinkItem[] = [
  { id: 'about', label: 'Sobre mí', href: '#about' },
  { id: 'experience', label: 'Experiencia', href: '#experience' },
  { id: 'projects', label: 'Proyectos', href: '#projects' },
  { id: 'certifications', label: 'Certificados', href: '#certifications' },
  { id: 'contact', label: 'Contacto', href: '#contact' },
];

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Monitor scroll position & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section detection
      const sections = ['hero', ...navItems.map((item) => item.id)];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300 ${className}`}
    >
      {/* ── Dynamic Island Container ────────────────────────── */}
      <nav
        aria-label="Navegación principal"
        className={`pointer-events-auto relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? 'w-full max-w-sm rounded-3xl' : 'w-auto rounded-full'
        } backdrop-blur-2xl bg-zinc-900/75 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] ${
          isScrolled ? 'py-2 px-3 sm:px-5 ring-1 ring-white/15' : 'py-2.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-6">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-2 text-white font-semibold text-sm tracking-tight py-1 px-2 rounded-full transition-all duration-200 hover:text-blue-300"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-[10px] font-bold text-white shadow-sm ring-1 ring-white/20 group-hover:scale-105 transition-transform">
              JH
            </span>
            <span className="hidden sm:inline font-mono text-xs tracking-wider text-white/90">
              Hawasly<span className="text-blue-400 font-bold">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 text-xs font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'text-white font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] bg-white/10'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Button: Descargar CV */}
          <div className="flex items-center gap-2">
            <ModernButton
              variant="primary"
              size="sm"
              onClick={() => window.print()}
              icon={<Download className="w-3.5 h-3.5" />}
              className="!text-xs !py-1.5 !px-3.5 shadow-[0_2px_12px_rgba(99,102,241,0.35)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.5)] cursor-pointer"
              title="Descargar o imprimir versión formal en PDF (A4)"
            >
              <span className="hidden sm:inline">Descargar </span>CV
            </ModernButton>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Expanded inside Dynamic Island) */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-white/10 mt-3 flex flex-col gap-1.5 animate-fade-in">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-all ${
                    isActive
                      ? 'bg-white/10 text-white font-medium border border-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-blue-400" />}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
