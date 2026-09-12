/* ─────────────────────────────────────────────────────────────
   HeroSection — High-Impact Ultra-Contemporary Hero
   Liquid glass aesthetic with aurora glow, pulsating status badge,
   interactive social media glass bar, and dynamic CTAs.
   ───────────────────────────────────────────────────────────── */

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Layers,
  Code,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import SectionContainer from './SectionContainer';
import ModernButton from './ModernButton';
import ScrollEffectsWrapper from './ScrollEffectsWrapper';
import { cvData } from '../data/cvData';

export interface HeroSectionProps {
  className?: string;
}

const socialIconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  platzi: <GraduationCap className="w-5 h-5" />,
  email: <Mail className="w-5 h-5" />,
};

export const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const { personal } = cvData;

  return (
    <SectionContainer
      sectionId="hero"
      aurora
      className={`min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 ${className}`}
    >
      <div className="flex flex-col gap-8 max-w-4xl">
        {/* ── Status Badge & Certification Accreditations ─── */}
        <ScrollEffectsWrapper direction="up" delay={0} duration={600}>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.12] w-fit text-xs sm:text-sm text-white/85 shadow-[0_4px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              </span>
              <span className="font-medium tracking-wide">Disponible para nuevos retos</span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden sm:inline text-white/60 font-mono text-xs">Full Stack & Arquitectura</span>
            </div>

            <a
              href="#certifications"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 hover:bg-violet-500/20 backdrop-blur-xl border border-violet-500/30 text-xs sm:text-sm text-violet-200 hover:text-white transition-all shadow-[0_4px_16px_rgba(139,92,246,0.2)] group"
            >
              <GraduationCap className="w-3.5 h-3.5 text-violet-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium">11 Certificaciones Oficiales Platzi & CESDE</span>
              <span className="text-violet-400/80 font-mono text-[11px]">→</span>
            </a>
          </div>
        </ScrollEffectsWrapper>

        {/* ── Main Name & Title ──────────────────────────────── */}
        <ScrollEffectsWrapper direction="up" delay={100} duration={700}>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Hola, soy{' '}
              <span className="text-gradient-aurora block sm:inline">
                {personal.fullName}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-light tracking-tight">
              {personal.role}
            </p>
          </div>
        </ScrollEffectsWrapper>

        {/* ── Concise Architecture & Full Stack Description ──── */}
        <ScrollEffectsWrapper direction="up" delay={200} duration={700}>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed font-normal">
            Especializado en desarrollo web con <span className="text-white font-medium">Angular 17</span>, <span className="text-white font-medium">JavaScript</span> y <span className="text-white font-medium">React</span>, arquitecturas backend con <span className="text-white font-medium">Java</span> y <span className="text-white font-medium">Node.js</span>, seguridad <span className="text-emerald-400 font-medium">OWASP Top 10</span>, y administración cloud con <span className="text-cyan-400 font-medium">SQL Azure</span>. Formación acreditada por Platzi & CESDE respaldada por <span className="text-aurora-cyan font-medium">pensamiento lógico computacional</span> e <span className="text-violet-300 font-medium">IA aplicada (Prompt Engineering)</span>.
          </p>
        </ScrollEffectsWrapper>

        {/* ── Certified Pillars / Key Competencies ───────────── */}
        <ScrollEffectsWrapper direction="up" delay={250} duration={700}>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-blue-400/25 text-xs text-blue-200 backdrop-blur-md">
              <Code className="w-3.5 h-3.5 text-blue-400" />
              <span>Angular 17 • JavaScript • Tailwind</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-violet-400/25 text-xs text-violet-200 backdrop-blur-md">
              <Layers className="w-3.5 h-3.5 text-violet-400" />
              <span>Java POO • OWASP Top 10</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-emerald-400/25 text-xs text-emerald-200 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SQL en Azure • Bases de Datos</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-cyan-400/25 text-xs text-cyan-200 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Prompt Engineering • Pensamiento Lógico</span>
            </div>
          </div>
        </ScrollEffectsWrapper>

        {/* ── Location Info ──────────────────────────────────── */}
        <ScrollEffectsWrapper direction="up" delay={300} duration={700}>
          <div className="flex items-center gap-2 text-white/50 text-xs sm:text-sm font-mono">
            <MapPin className="w-4 h-4 text-blue-400/80" />
            <span>
              {personal.contact.locationEmoji} {personal.contact.location}
            </span>
          </div>
        </ScrollEffectsWrapper>

        {/* ── CTA Action Buttons ─────────────────────────────── */}
        <ScrollEffectsWrapper direction="up" delay={350} duration={700}>
          <div className="flex flex-wrap gap-4 pt-1">
            <ModernButton
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-4 h-4" />}
              href="#projects"
              className="shadow-[0_4px_24px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_32px_rgba(99,102,241,0.6)]"
            >
              Explorar Proyectos
            </ModernButton>
            <ModernButton
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              href="#contact"
            >
              Hablemos
            </ModernButton>
          </div>
        </ScrollEffectsWrapper>

        {/* ── Interactive Social Media Glass Bar ──────────────── */}
        <ScrollEffectsWrapper direction="up" delay={400} duration={700}>
          <div className="pt-2">
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
              Conéctate conmigo
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {personal.contact.socials.map((social) => {
                const icon = socialIconMap[social.platform] ?? <ExternalLink className="w-5 h-5" />;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.10] border border-white/[0.08] hover:border-white/[0.20] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] text-white/70 hover:text-white"
                    title={social.label}
                  >
                    <span className="transition-transform group-hover:scale-110 text-white/80 group-hover:text-white">
                      {icon}
                    </span>
                    <span className="text-xs font-medium">{social.label}</span>
                    <span className="text-[10px] text-white/30 font-mono group-hover:text-white/60 transition-colors">
                      ↗
                    </span>
                  </a>
                );
              })}

              {/* Direct Email Pill */}
              <a
                href={`mailto:${personal.contact.email}`}
                className="group relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.10] border border-white/[0.08] hover:border-white/[0.20] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] text-white/70 hover:text-white"
                title="Enviar correo"
              >
                <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">Email</span>
                <span className="text-[10px] text-white/30 font-mono group-hover:text-white/60 transition-colors">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </ScrollEffectsWrapper>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
