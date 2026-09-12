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
  Award,
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
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
        {/* ── Left Column: Content & Description (7 cols) ──── */}
        <div className="lg:col-span-7 flex flex-col gap-8">
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

        {/* ── Right Column: Liquid Glass Profile Portrait Card (5 cols) ── */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <ScrollEffectsWrapper direction="up" delay={200} duration={800} className="w-full max-w-sm sm:max-w-md">
            <div className="relative group">
              {/* Aurora ambient glow backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/35 via-blue-500/25 to-emerald-400/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Liquid Glass Portrait Container */}
              <div className="relative p-3.5 sm:p-4 rounded-3xl bg-zinc-900/65 backdrop-blur-2xl border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-500 group-hover:border-white/25">
                {/* Photo Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.8] border border-white/10 bg-zinc-950 shadow-inner">
                  <img
                    src={personal.avatarUrl || '/profile.jpg'}
                    alt={personal.fullName}
                    className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Inner Overlay Info */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between">
                    <div>
                      <p className="text-white font-bold text-base leading-tight drop-shadow-md">
                        {personal.fullName}
                      </p>
                      <p className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 mt-0.5 drop-shadow">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Software Engineering Analyst
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-white/80 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-sm">
                      🇨🇴 Medellín
                    </span>
                  </div>
                </div>

                {/* Floating Chip 1: Top-Right (Official Certifications) */}
                <a
                  href="#certifications"
                  className="absolute -top-3 -right-2 sm:-right-3 px-3.5 py-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800/95 backdrop-blur-xl border border-violet-400/40 text-violet-200 hover:text-white text-xs font-mono shadow-[0_8px_24px_rgba(0,0,0,0.7)] flex items-center gap-1.5 transition-all group-hover:scale-105"
                  title="Ver 11 certificaciones oficiales"
                >
                  <Award className="w-3.5 h-3.5 text-violet-400" />
                  <span className="font-semibold text-[11px]">11 Certificados Platzi</span>
                  <span className="text-violet-400/70 text-[10px]">→</span>
                </a>

                {/* Floating Chip 2: Bottom-Left (Key Tech Stack) */}
                <div className="absolute -bottom-3 -left-2 sm:-left-3 px-3.5 py-1.5 rounded-full bg-zinc-900/90 backdrop-blur-xl border border-blue-400/30 text-blue-200 text-xs font-mono shadow-[0_8px_24px_rgba(0,0,0,0.7)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  <span className="text-[11px]">Angular 17 • React • Java</span>
                </div>
              </div>
            </div>
          </ScrollEffectsWrapper>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
