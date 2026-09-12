/* ─────────────────────────────────────────────────────────────
   ProjectsSection — Featured Showcase with Liquid Glass Cards
   High-fidelity presentation of GCO Loyalty & Auth Engine
   and DateKui Academic Platform with live demo, GitHub links,
   technical achievements, and responsive grid.
   ───────────────────────────────────────────────────────────── */

import { useState } from 'react';
import {
  Code2,
  ExternalLink,
  Github,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';
import SectionContainer from './SectionContainer';
import GlassCard from './GlassCard';
import ModernButton from './ModernButton';
import ScrollEffectsWrapper from './ScrollEffectsWrapper';
import { cvData } from '../data/cvData';

export interface ProjectsSectionProps {
  className?: string;
}

const INITIAL_PROJECTS_COUNT = 2;
const INITIAL_HIGHLIGHTS_COUNT = 2;

export const ProjectsSection = ({ className = '' }: ProjectsSectionProps) => {
  const { projects } = cvData;
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedAchievements, setExpandedAchievements] = useState<Record<string, boolean>>({});

  const toggleAchievementExpand = (projectId: string) => {
    setExpandedAchievements((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const visibleProjects = showAllProjects
    ? featuredProjects
    : featuredProjects.slice(0, INITIAL_PROJECTS_COUNT);
  const remainingProjectsCount = Math.max(0, featuredProjects.length - INITIAL_PROJECTS_COUNT);

  return (
    <SectionContainer sectionId="projects" aurora className={className}>
      {/* ── Section Header ─────────────────────────────────── */}
      <ScrollEffectsWrapper direction="up" delay={0}>
        <div className="space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-aurora-cyan text-xs font-mono uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Portafolio & Ingeniería de Software</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Proyectos Destacados
          </h2>
          <p className="text-text-secondary max-w-2xl text-sm sm:text-base leading-relaxed">
            Sistemas completos desarrollados con arquitecturas escalables, seguridad de nivel empresarial y experiencias de usuario fluidas de alto rendimiento.
          </p>
        </div>
      </ScrollEffectsWrapper>

      {/* ── Responsive Projects Grid ───────────────────────── */}
      <div className="grid gap-8 lg:grid-cols-2">
        {visibleProjects.map((project, index) => {
          const isGCO = project.id === 'proj-gco-loyalty';
          const accentColor = isGCO ? 'from-blue-500/20 via-indigo-500/10 to-transparent' : 'from-cyan-500/20 via-teal-500/10 to-transparent';
          const glowColor = isGCO ? 'blue' : 'cyan';

          const githubLink = project.links.find((l) => l.type === 'github');
          const liveLink = project.links.find((l) => l.type === 'live');

          const isHighlightsExpanded = !!expandedAchievements[project.id];
          const visibleHighlights = isHighlightsExpanded
            ? (project.highlights ?? [])
            : (project.highlights ?? []).slice(0, INITIAL_HIGHLIGHTS_COUNT);
          const remainingHighlights = Math.max(
            0,
            (project.highlights?.length ?? 0) - INITIAL_HIGHLIGHTS_COUNT
          );

          return (
            <ScrollEffectsWrapper
              key={project.id}
              direction="up"
              delay={100 * (index + 1)}
              className="flex"
            >
              <GlassCard
                intensity="medium"
                glow={glowColor}
                className="p-6 sm:p-8 flex flex-col justify-between w-full group relative overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                {/* Subtle top ambient glow gradient */}
                <div
                  className={`absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br ${accentColor} rounded-full blur-3xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  aria-hidden="true"
                />

                {/* ── Card Header ──────────────────────────── */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    {/* Status indicator */}
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${
                        project.status === 'completed'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25 shadow-[0_0_12px_rgba(52,211,153,0.15)]'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/25 shadow-[0_0_12px_rgba(251,191,36,0.15)]'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.status === 'completed' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                        }`}
                      />
                      {project.status === 'completed' ? 'Producción / Listo' : 'En Desarrollo Activo'}
                    </span>

                    {/* Category */}
                    <span className="text-xs text-text-tertiary font-mono tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-blue-400" />
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm font-medium text-text-accent mt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed pt-1">
                    {project.description}
                  </p>

                  {/* Retail Brands / Context callout for GCO */}
                  {isGCO && (
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-text-secondary space-y-1">
                      <div className="font-semibold text-white/90 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                        <span>Marcas Retail Implementadas:</span>
                      </div>
                      <p className="text-white/60 font-mono text-[11px]">
                        Americanino • Chevignon • American Eagle • Esprit • Naf Naf • Rifle • Outlet Todo al 50%
                      </p>
                    </div>
                  )}

                  {/* Technical Achievements / Highlights with Read More Toggle */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="pt-2 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-mono uppercase tracking-widest text-white/50 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-aurora-cyan" />
                          Logros Técnicos & Arquitectura:
                        </p>
                        {remainingHighlights > 0 && (
                          <span className="text-[10px] font-mono text-white/40">
                            {isHighlightsExpanded
                              ? `${project.highlights.length} de ${project.highlights.length}`
                              : `${INITIAL_HIGHLIGHTS_COUNT} de ${project.highlights.length}`}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {visibleHighlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary/90 leading-normal"
                          >
                            <CheckCircle2 className="w-4 h-4 text-aurora-cyan mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Expandable Read More / Show Less for Highlights */}
                      {project.highlights.length > INITIAL_HIGHLIGHTS_COUNT && (
                        <button
                          type="button"
                          onClick={() => toggleAchievementExpand(project.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors pt-1 cursor-pointer group"
                        >
                          <span>
                            {isHighlightsExpanded
                              ? 'Mostrar menos detalles'
                              : `Leer más logros técnicos (${remainingHighlights} adicionales)`}
                          </span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isHighlightsExpanded ? 'rotate-180 text-cyan-300' : 'group-hover:translate-y-0.5'
                            }`}
                          />
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* ── Card Footer: Tech Stack & Action Links ─ */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] space-y-5 relative z-10">
                  {/* Technologies tags */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                      Stack Tecnológico:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/80 hover:bg-white/[0.08] hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: GitHub & Live Demo */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    {liveLink && (
                      <ModernButton
                        variant="primary"
                        size="md"
                        href={liveLink.url}
                        icon={<ExternalLink className="w-4 h-4" />}
                        className="shadow-[0_4px_16px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_24px_rgba(99,102,241,0.5)] flex-1 sm:flex-initial"
                      >
                        Demo en Vivo
                      </ModernButton>
                    )}

                    {githubLink && (
                      <ModernButton
                        variant="secondary"
                        size="md"
                        href={githubLink.url}
                        icon={<Github className="w-4 h-4" />}
                        className="flex-1 sm:flex-initial"
                      >
                        Repositorio GitHub
                      </ModernButton>
                    )}
                  </div>
                </div>
              </GlassCard>
            </ScrollEffectsWrapper>
          );
        })}
      </div>

      {/* ── Expandable Show More / Show Less Projects Button ── */}
      {featuredProjects.length > INITIAL_PROJECTS_COUNT && (
        <ScrollEffectsWrapper direction="up" delay={50}>
          <div className="flex justify-center pt-10">
            <button
              type="button"
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.12] hover:border-cyan-400/50 backdrop-blur-xl text-xs sm:text-sm font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              aria-expanded={showAllProjects}
            >
              <span>
                {showAllProjects
                  ? 'Mostrar menos proyectos'
                  : `Ver más proyectos (${remainingProjectsCount} adicionales)`}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
                  showAllProjects ? 'rotate-180 text-cyan-300' : 'group-hover:translate-y-0.5'
                }`}
              />
            </button>
          </div>
        </ScrollEffectsWrapper>
      )}
    </SectionContainer>
  );
};

export default ProjectsSection;
