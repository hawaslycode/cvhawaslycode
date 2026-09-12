/* ─────────────────────────────────────────────────────────────
   ExperienceSection — Minimalist Illuminated Vertical Timeline
   Displays professional work history with illuminated nodes,
   glowing gradient path, and Liquid Glass cards.
   ───────────────────────────────────────────────────────────── */

import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import SectionContainer from './SectionContainer';
import GlassCard from './GlassCard';
import ScrollEffectsWrapper from './ScrollEffectsWrapper';
import { cvData } from '../data/cvData';

export interface ExperienceSectionProps {
  className?: string;
}

export const ExperienceSection = ({ className = '' }: ExperienceSectionProps) => {
  const { experience } = cvData;

  return (
    <SectionContainer sectionId="experience" className={className}>
      {/* ── Section Header ─────────────────────────────────── */}
      <ScrollEffectsWrapper direction="up" delay={0}>
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-aurora-blue text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trayectoria & Experiencia Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Experiencia Laboral
          </h2>
          <p className="text-text-secondary max-w-2xl text-sm sm:text-base leading-relaxed">
            Ingeniería de software enfocada en entregar valor de negocio mediante soluciones arquitectónicas robustas, desarrollo full stack y metodologías ágiles.
          </p>
        </div>
      </ScrollEffectsWrapper>

      {/* ── Vertical Timeline Container ─────────────────────── */}
      <div className="relative pl-6 sm:pl-10 md:pl-12">
        {/* Glowing vertical spine / line */}
        <div
          className="absolute left-2 sm:left-4 md:left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500/80 to-transparent shadow-[0_0_12px_rgba(99,102,241,0.5)]"
          aria-hidden="true"
        />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* ── Glowing Node on Timeline ───────────────── */}
              <div
                className="absolute -left-6 sm:-left-10 md:-left-12 top-6 flex items-center justify-center -translate-x-1/2"
                aria-hidden="true"
              >
                {/* Outer pulsating aura */}
                <div className="absolute w-7 h-7 rounded-full bg-blue-500/20 animate-ping opacity-60" />
                {/* Core illuminated node */}
                <div className="relative w-4 h-4 rounded-full bg-gradient-to-tr from-blue-400 to-violet-400 border-2 border-void-950 shadow-[0_0_16px_rgba(59,130,246,0.9)] group-hover:scale-125 transition-transform duration-300" />
              </div>

              {/* ── Experience Content Card ────────────────── */}
              <ScrollEffectsWrapper direction="left" delay={100 * (index + 1)}>
                <GlassCard
                  intensity="medium"
                  glow="blue"
                  className="p-6 sm:p-8 space-y-6 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-aurora-cyan uppercase tracking-wider mb-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                        <span className="text-white/30">•</span>
                        <span className="text-white/60 capitalize">{exp.type}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.10] text-xs font-mono text-white/90 shadow-sm">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>
                          {exp.startDate} — {exp.endDate ?? 'Presente'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-text-tertiary font-mono">
                        <MapPin className="w-3 h-3 text-violet-400" />
                        <span>
                          {exp.location} ({exp.locationType})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Highlights & Achievements */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-white/50 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-aurora-violet" />
                        <span>Contribuciones & Logros Técnicos:</span>
                      </h4>
                      <ul className="grid gap-2.5 sm:grid-cols-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary/90 leading-snug"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Used */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                      Tecnologías Clave:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/80 hover:bg-white/[0.08] hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </ScrollEffectsWrapper>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
