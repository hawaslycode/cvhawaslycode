/* ─────────────────────────────────────────────────────────────
   ContactSection — Liquid Glass Interactive Contact Hub
   Direct mailto connection, copy email with visual feedback,
   schedule a call button, and direct professional networks.
   ───────────────────────────────────────────────────────────── */

import { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Calendar,
  Send,
  MapPin,
  Clock,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  GraduationCap,
} from 'lucide-react';
import SectionContainer from './SectionContainer';
import GlassCard from './GlassCard';
import ModernButton from './ModernButton';
import ScrollEffectsWrapper from './ScrollEffectsWrapper';
import { cvData } from '../data/cvData';

export interface ContactSectionProps {
  className?: string;
}

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  platzi: <GraduationCap className="w-4 h-4" />,
  email: <Mail className="w-4 h-4" />,
};

export const ContactSection = ({ className = '' }: ContactSectionProps) => {
  const { personal } = cvData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scheduleMailUrl = `mailto:${personal.contact.email}?subject=${encodeURIComponent(
    'Agendar Llamada / Reunión Inicial — Johan Méndez Hawasly',
  )}&body=${encodeURIComponent(
    'Hola Johan,\n\nMe gustaría coordinar una llamada contigo para conversar sobre una oportunidad / proyecto.\n\nDisponibilidad sugerida:\n- \n\nSaludos,\n',
  )}`;

  return (
    <SectionContainer sectionId="contact" aurora className={className}>
      {/* ── Section Header ─────────────────────────────────── */}
      <ScrollEffectsWrapper direction="up" delay={0}>
        <div className="space-y-4 mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-aurora-blue text-xs font-mono uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            <span>Contacto Directo & Alianzas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Estoy disponible para roles como Full Stack Developer, Software Engineering Analyst o consultoría de ingeniería de software a medida.
          </p>
        </div>
      </ScrollEffectsWrapper>

      {/* ── Main Contact Card ──────────────────────────────── */}
      <ScrollEffectsWrapper direction="up" delay={150} className="max-w-3xl mx-auto">
        <GlassCard
          intensity="strong"
          glow="blue"
          className="p-6 sm:p-10 md:p-12 relative overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          {/* Ambient Glow */}
          <div
            className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-8 text-center">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Respuesta garantizada en menos de 24 horas</span>
            </div>

            {/* Email Heading & Link */}
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-text-tertiary">
                Buzón Electrónico Principal
              </p>
              <a
                href={`mailto:${personal.contact.email}`}
                className="text-2xl sm:text-4xl font-extrabold text-white hover:text-blue-300 transition-colors block break-all font-mono tracking-tight group"
              >
                <span>{personal.contact.email}</span>
                <span className="inline-block ml-2 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </a>
            </div>

            {/* Action Buttons: Mail, Copy, Schedule */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {/* Send Email Button */}
              <ModernButton
                variant="primary"
                size="md"
                href={`mailto:${personal.contact.email}`}
                icon={<Mail className="w-4 h-4" />}
                className="shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_28px_rgba(99,102,241,0.55)]"
              >
                Enviar Correo
              </ModernButton>

              {/* Schedule a Call Button */}
              <ModernButton
                variant="secondary"
                size="md"
                href={scheduleMailUrl}
                icon={<Calendar className="w-4 h-4 text-violet-400" />}
                className="hover:border-violet-400/40"
              >
                Agendar Llamada
              </ModernButton>

              {/* Copy Email Button with Visual Feedback */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-button)] text-sm font-medium bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.10] hover:border-white/[0.20] text-white/90 transition-all duration-300 active:scale-95 cursor-pointer select-none"
                aria-label="Copiar correo electrónico al portapapeles"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">¡Copiado al portapapeles!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-white/70" />
                    <span>Copiar email</span>
                  </>
                )}
              </button>
            </div>

            {/* Extra Info: Location, Timezone, Work Mode */}
            <div className="grid gap-3 sm:grid-cols-2 pt-6 border-t border-white/[0.08] text-xs text-text-secondary text-left max-w-lg mx-auto">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>
                  <strong>Ubicación:</strong> {personal.contact.locationEmoji} {personal.contact.location}
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <Clock className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span>
                  <strong>Zona Horaria:</strong> UTC-5 (COT) • Remoto / Híbrido
                </span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs text-text-tertiary font-mono mr-1">Otras redes:</span>
              {personal.contact.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.15] text-xs font-medium text-white/70 hover:text-white transition-all"
                  title={social.label}
                >
                  <span className="text-white/80">{socialIcons[social.platform] ?? <ExternalLink className="w-3.5 h-3.5" />}</span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </GlassCard>
      </ScrollEffectsWrapper>
    </SectionContainer>
  );
};

export default ContactSection;
