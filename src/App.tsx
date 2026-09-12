/* ─────────────────────────────────────────────────────────────
   App — Hawasly Code Portfolio & Interactive CV
   Liquid Glass aesthetic with Apple Dynamic Island navigation,
   aurora gradients, and fluid scroll reveal effects.
   ───────────────────────────────────────────────────────────── */

import {
  Navbar,
  HeroSection,
  ExperienceSection,
  ProjectsSection,
  CertificatesSection,
  ContactSection,
  GlassCard,
  ModernButton,
  SectionContainer,
  ScrollEffectsWrapper,
} from './components';
import { cvData } from './data/cvData';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  Code2,
  ArrowRight,
  Sparkles,
  User,
  CheckCircle2,
  Terminal,
  Award,
} from 'lucide-react';

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
  linkedin: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
  twitter: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
  platzi: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />,
  email: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
};

function App() {
  const { personal, skillGroups } = cvData;

  return (
    <div className="relative min-h-screen bg-void-950 text-text-primary selection:bg-blue-500/30 selection:text-white">
      {/* ── Global Floating Aurora Mesh Background ──────────── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="aurora-blob bg-aurora-blue/[0.08] w-[850px] h-[850px] -top-[220px] -left-[220px]" />
        <div
          className="aurora-blob bg-aurora-violet/[0.07] w-[650px] h-[650px] top-[35%] -right-[150px]"
          style={{ animationDelay: '5s' }}
        />
        <div
          className="aurora-blob bg-aurora-cyan/[0.06] w-[750px] h-[750px] bottom-[10%] left-[20%]"
          style={{ animationDelay: '10s' }}
        />
      </div>

      {/* ── Floating Dynamic Island Navbar ──────────────────── */}
      <Navbar />

      <main>
        {/* ═════════════════════════════════════════════════════
            1. HERO SECTION
            ═════════════════════════════════════════════════════ */}
        <HeroSection />

        {/* ═════════════════════════════════════════════════════
            2. ABOUT SECTION (#about)
            ═════════════════════════════════════════════════════ */}
        <SectionContainer sectionId="about" aurora>
          <ScrollEffectsWrapper direction="up" delay={50}>
            <div className="space-y-3 mb-12">
              <div className="flex items-center gap-2 text-aurora-cyan text-xs sm:text-sm font-mono tracking-wider uppercase">
                <User className="w-4 h-4" />
                Perfil Profesional
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Sobre mí
              </h2>
              <p className="text-text-secondary max-w-xl text-sm sm:text-base">
                Pasión por la ingeniería de software, arquitectura limpia y experiencias interactivas excepcionales.
              </p>
            </div>
          </ScrollEffectsWrapper>

          <div className="grid gap-6 md:grid-cols-12">
            {/* Bio Card */}
            <ScrollEffectsWrapper direction="up" delay={100} className="md:col-span-7">
              <GlassCard intensity="medium" className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-blue-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>hawaslycode.summary</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    Transformando ideas en soluciones robustas y escalables
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {personal.bio}
                  </p>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    Mi enfoque combina sólidos fundamentos de ingeniería de software (patrones de diseño, APIs REST, bases de datos SQL) con diseño moderno de interfaces (React, TypeScript, animaciones fluidas y microinteracciones de alta fidelidad).
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-text-tertiary font-mono">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>{personal.contact.location}</span>
                  </div>
                  <ModernButton
                    variant="ghost"
                    size="sm"
                    href="#experience"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Ver trayectoria
                  </ModernButton>
                </div>
              </GlassCard>
            </ScrollEffectsWrapper>

            {/* Metrics & Highlights Column */}
            <div className="md:col-span-5 grid gap-4">
              <ScrollEffectsWrapper direction="up" delay={150}>
                <GlassCard intensity="subtle" glow="blue" className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white tracking-tight">Full Stack</div>
                      <div className="text-xs text-text-secondary mt-0.5">Frontend reactivo + Backend seguro</div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollEffectsWrapper>

              <ScrollEffectsWrapper direction="up" delay={200}>
                <GlassCard intensity="subtle" glow="violet" className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white tracking-tight">11 Certificaciones</div>
                      <div className="text-xs text-text-secondary mt-0.5">Platzi & CESDE acreditadas oficialmente</div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollEffectsWrapper>

              <ScrollEffectsWrapper direction="up" delay={250}>
                <GlassCard intensity="subtle" glow="cyan" className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white tracking-tight">Clean Code</div>
                      <div className="text-xs text-text-secondary mt-0.5">Mantenibilidad, modularidad y performance</div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollEffectsWrapper>
            </div>
          </div>
        </SectionContainer>

        {/* ═════════════════════════════════════════════════════
            3. EXPERIENCE SECTION (#experience)
            ═════════════════════════════════════════════════════ */}
        <ExperienceSection />

        {/* ═════════════════════════════════════════════════════
            4. PROJECTS SECTION (#projects)
            ═════════════════════════════════════════════════════ */}
        <ProjectsSection />

        {/* ═════════════════════════════════════════════════════
            5. SKILLS SECTION (#skills)
            ═════════════════════════════════════════════════════ */}
        <SectionContainer sectionId="skills">
          <ScrollEffectsWrapper direction="up" delay={50}>
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2 text-aurora-violet text-xs sm:text-sm font-mono tracking-wider uppercase">
                <Sparkles className="w-4 h-4" />
                Stack Tecnológico & Competencias
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Skills & Herramientas
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-4xl">
                <p className="text-text-secondary text-sm sm:text-base">
                  Dominio técnico respaldado por experiencia práctica y certificaciones oficiales.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono w-fit">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Insignia CERT = Acreditación Oficial Verificable</span>
                </div>
              </div>
            </div>
          </ScrollEffectsWrapper>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, idx) => (
              <ScrollEffectsWrapper key={group.category} direction="up" delay={80 * (idx + 1)}>
                <GlassCard intensity="subtle" className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-text-accent uppercase tracking-wider mb-4 pb-2 border-b border-white/[0.06] flex items-center justify-between">
                      <span>{group.label}</span>
                      <span className="text-[11px] font-mono text-white/40 normal-case">
                        {group.skills.filter((s) => s.certified).length > 0
                          ? `${group.skills.filter((s) => s.certified).length} certificadas`
                          : ''}
                      </span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${
                            skill.certified
                              ? 'bg-gradient-to-r from-violet-500/15 via-emerald-500/10 to-transparent border-emerald-400/40 text-white shadow-[0_2px_8px_rgba(16,185,129,0.12)] hover:border-emerald-400/70 hover:scale-[1.02]'
                              : skill.level === 'expert'
                                ? 'bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/20'
                                : skill.level === 'advanced'
                                  ? 'bg-violet-500/10 border-violet-500/20 text-violet-300 hover:bg-violet-500/20'
                                  : 'bg-white/[0.04] border-white/[0.08] text-text-secondary hover:bg-white/[0.08]'
                          }`}
                          title={`${skill.name} — ${skill.level}${skill.certified ? ' • Certificado Oficial Platzi / CESDE' : ''}`}
                        >
                          {skill.certified && (
                            <Award className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                          )}
                          <span>{skill.name}</span>
                          {skill.certified && (
                            <span className="text-[9px] font-mono font-bold text-emerald-300 bg-emerald-500/20 px-1 py-0.2 rounded border border-emerald-400/30">
                              CERT
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {group.skills.some((s) => s.certified) && (
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-text-tertiary font-mono">
                      <span className="text-emerald-400/80 flex items-center gap-1">
                        ✓ Respaldado en Diplomas
                      </span>
                      <a
                        href="#certifications"
                        className="text-white/50 hover:text-white transition-colors"
                      >
                        Ver certificados →
                      </a>
                    </div>
                  )}
                </GlassCard>
              </ScrollEffectsWrapper>
            ))}
          </div>
        </SectionContainer>

        {/* ═════════════════════════════════════════════════════
            6. CERTIFICATIONS SECTION (#certifications)
            ═════════════════════════════════════════════════════ */}
        <CertificatesSection />

        {/* ═════════════════════════════════════════════════════
            7. CONTACT SECTION (#contact)
            ═════════════════════════════════════════════════════ */}
        <ContactSection />
      </main>

      {/* ═════════════════════════════════════════════════════
          FOOTER
          ═════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.06] py-12 mt-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm font-semibold text-white">
              {personal.fullName}
            </p>
            <p className="text-xs text-text-tertiary">
              © {new Date().getFullYear()} {personal.displayName}. Desarrollado con React, TypeScript & Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {personal.contact.socials.map((social) => (
              <ModernButton
                key={social.platform}
                variant="icon"
                size="sm"
                href={social.url}
                title={social.label}
              >
                {socialIcons[social.platform] ?? <ExternalLink className="w-4 h-4" />}
              </ModernButton>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
