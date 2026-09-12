/* ─────────────────────────────────────────────────────────────
   CertificatesSection — Diplomas Oficiales Platzi & CESDE
   Visualización fiel de las acreditaciones oficiales de
   Johan David Méndez Hawasly con soporte de Lightbox Modal,
   código de verificación único y enlaces directos a Platzi.
   ───────────────────────────────────────────────────────────── */

import { useState, useEffect } from 'react';
import {
  GraduationCap,
  ExternalLink,
  ZoomIn,
  X,
  Calendar,
  Award,
  Clock,
  Copy,
  Check,
  Code,
  FileText,
} from 'lucide-react';
import SectionContainer from './SectionContainer';
import GlassCard from './GlassCard';
import ModernButton from './ModernButton';
import ScrollEffectsWrapper from './ScrollEffectsWrapper';
import { cvData } from '../data/cvData';
import type { Certification, CertCategory } from '../types/cv';

export interface CertificatesSectionProps {
  className?: string;
}

interface FilterTab {
  id: CertCategory;
  label: string;
}

export const CertificatesSection = ({ className = '' }: CertificatesSectionProps) => {
  const { certifications, personal } = cvData;
  const [selectedCategory, setSelectedCategory] = useState<CertCategory>('all');
  const [activeModalCert, setActiveModalCert] = useState<Certification | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Dynamic counts for each filter category
  const cesdeCount = certifications.filter((c) => c.partner === 'CESDE' || c.isOfficialDiploma).length;
  const frontendCount = certifications.filter((c) => c.category === 'frontend').length;
  const backendCount = certifications.filter((c) => c.category === 'backend').length;
  const databaseCount = certifications.filter((c) => c.category === 'database').length;
  const toolsAndLogicCount = certifications.filter((c) => c.category === 'tools' || c.category === 'logic').length;

  const filterTabs: FilterTab[] = [
    { id: 'all', label: `Todos (${certifications.length})` },
    { id: 'cesde', label: `Diplomas CESDE (${cesdeCount})` },
    { id: 'frontend', label: `Frontend & UI (${frontendCount})` },
    { id: 'backend', label: `Backend & Seguridad (${backendCount})` },
    { id: 'database', label: `Bases de Datos & Cloud (${databaseCount})` },
    { id: 'tools', label: `IA, Lógica & Idiomas (${toolsAndLogicCount})` },
  ];

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalCert(null);
      }
    };

    if (activeModalCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalCert]);

  const handleCopyCode = (code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const filteredCerts = certifications.filter((cert) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'cesde') return cert.partner === 'CESDE' || cert.isOfficialDiploma;
    if (selectedCategory === 'tools') return cert.category === 'tools' || cert.category === 'logic';
    return cert.category === selectedCategory;
  });

  return (
    <SectionContainer sectionId="certifications" aurora className={className}>
      {/* ── Section Header ─────────────────────────────────── */}
      <ScrollEffectsWrapper direction="up" delay={0}>
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-aurora-violet text-xs font-mono uppercase tracking-wider shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
            <span>Acreditaciones Oficiales ({certifications.length} Certificaciones Verificadas)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Diplomas & Certificaciones Oficiales
          </h2>
          <p className="text-text-secondary max-w-2xl text-sm sm:text-base leading-relaxed">
            Diplomas y certificados oficiales acreditados por Platzi y CESDE. Cada acreditación incluye imagen de alta resolución, código criptográfico de autenticidad, carga horaria y enlace directo a la certificación oficial online.
          </p>
        </div>
      </ScrollEffectsWrapper>

      {/* ── Filter Tabs ────────────────────────────────────── */}
      <ScrollEffectsWrapper direction="up" delay={100}>
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-white/[0.06] mb-8">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white/15 text-white border border-white/25 shadow-[0_4px_16px_rgba(139,92,246,0.3)]'
                    : 'bg-white/[0.03] text-text-secondary hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </ScrollEffectsWrapper>

      {/* ── Certifications Grid (All 11 displayed with real images) ── */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCerts.map((cert, index) => {
          const isCESDE = cert.partner === 'CESDE' || cert.isOfficialDiploma;

          return (
            <ScrollEffectsWrapper
              key={cert.id}
              direction="up"
              delay={40 * (index % 6)}
              className="h-full"
            >
              <GlassCard
                intensity={isCESDE ? 'medium' : 'subtle'}
                glow={isCESDE ? 'violet' : 'none'}
                className={`p-5 h-full flex flex-col justify-between group transition-all duration-300 relative overflow-hidden ${
                  isCESDE
                    ? 'border-violet-500/30 hover:border-violet-400/50 shadow-[0_4px_24px_rgba(139,92,246,0.12)]'
                    : 'hover:border-white/20'
                }`}
              >
                {/* Subtle top indicator for CESDE official diplomas */}
                {isCESDE && (
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-violet-500/20 via-emerald-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  {/* Real Diploma Image Preview Container */}
                  <div
                    onClick={() => setActiveModalCert(cert)}
                    className="relative cursor-pointer rounded-xl overflow-hidden mb-4 border border-white/[0.10] group-hover:border-violet-400/40 transition-all duration-300 shadow-lg bg-zinc-950 aspect-[16/11]"
                    title="Clic para ver diploma en alta resolución (Lightbox)"
                  >
                    {cert.imageUrl ? (
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-void-900 text-white/40">
                        <Award className="w-10 h-10" />
                      </div>
                    )}

                    {/* Dark gradient overlay on hover with quick zoom badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        <ZoomIn className="w-3.5 h-3.5 text-violet-400" />
                        <span>Ver Diploma</span>
                      </span>

                      {cert.pdfUrl && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-300 bg-emerald-950/90 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                          <FileText className="w-3 h-3" />
                          <span>PDF</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Institution Badge & Diploma Type */}
                  <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                          isCESDE
                            ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-400'
                            : 'bg-blue-500/20 border-blue-400/40 text-blue-400'
                        }`}
                      >
                        <Award className="w-3 h-3" />
                      </div>
                      <span
                        className={`font-mono text-[11px] font-semibold ${
                          isCESDE ? 'text-emerald-400' : 'text-blue-400'
                        }`}
                      >
                        {cert.issuer} {cert.partner ? `• ${cert.partner}` : 'Oficial'}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-text-tertiary">
                      {isCESDE ? 'Acreditación CESDE' : 'Certificación Platzi'}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-blue-200 transition-colors line-clamp-2 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Metadata: Date & Hours */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-text-tertiary font-mono pt-2">
                    <span className="flex items-center gap-1 text-blue-300">
                      <Calendar className="w-3 h-3" />
                      {cert.issueDate}
                    </span>
                    {cert.hours && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-emerald-300">
                          <Clock className="w-3 h-3" />
                          {cert.hours}h formación
                        </span>
                      </>
                    )}
                  </div>

                  {/* Credential Code */}
                  {cert.credentialId && (
                    <div className="flex items-center gap-1.5 pt-2 text-[11px] font-mono text-white/50">
                      <Code className="w-3 h-3 text-violet-400 flex-shrink-0" />
                      <span className="truncate max-w-[200px]" title={cert.credentialId}>
                        ID: {cert.credentialId.slice(0, 8)}...{cert.credentialId.slice(-4)}
                      </span>
                    </div>
                  )}

                  {/* Skills tags */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded border ${
                            isCESDE
                              ? 'bg-violet-500/10 border-violet-500/20 text-violet-200'
                              : 'bg-white/[0.04] border-white/[0.06] text-white/75'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalCert(cert)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.10] border border-white/[0.08] hover:border-violet-400/40 text-xs font-medium text-white/90 hover:text-white transition-all cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-violet-400" />
                    <span>Ver Diploma</span>
                  </button>

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.10] border border-white/[0.08] hover:border-emerald-400/40 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-all"
                      title="Descargar PDF original"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  )}

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.10] border border-white/[0.08] hover:border-emerald-400/40 text-emerald-400 hover:text-emerald-300 transition-all"
                    title="Verificar en Platzi"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </GlassCard>
            </ScrollEffectsWrapper>
          );
        })}
      </div>

      {/* ── Lightbox Diploma Modal with Full High-Res Image ──── */}
      {activeModalCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-20 sm:pt-24 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade-in overflow-y-auto"
          onClick={() => setActiveModalCert(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-2xl bg-zinc-950 border border-white/20 p-4 sm:p-5 shadow-[0_25px_80px_rgba(0,0,0,0.95)] animate-fade-up overflow-hidden max-h-[88vh] overflow-y-auto my-auto"
          >
            {/* Ambient background glow */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button (X) */}
            <button
              type="button"
              onClick={() => setActiveModalCert(null)}
              className="absolute top-3.5 right-3.5 z-30 p-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/20 text-white hover:text-white transition-all cursor-pointer hover:scale-105 shadow-lg"
              aria-label="Cerrar diploma"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-white/[0.08] pr-10">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                  {activeModalCert.title}
                </h4>
                <p className="text-[11px] font-mono text-emerald-400">
                  {activeModalCert.issuer} {activeModalCert.partner ? `• ${activeModalCert.partner}` : ''}
                </p>
              </div>
            </div>

            {/* Official Diploma Image Frame */}
            <div className="rounded-xl overflow-hidden border border-white/15 shadow-xl bg-white mb-4 flex items-center justify-center">
              {activeModalCert.imageUrl ? (
                <img
                  src={activeModalCert.imageUrl}
                  alt={activeModalCert.title}
                  className="w-full max-h-[44vh] object-contain mx-auto"
                />
              ) : (
                <div className="p-8 text-center text-slate-800">
                  <Award className="w-12 h-12 mx-auto text-slate-400 mb-2" />
                  <p className="font-bold text-sm">{activeModalCert.title}</p>
                </div>
              )}
            </div>

            {/* Modal Metadata Summary */}
            <div className="grid sm:grid-cols-2 gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono mb-4">
              <div className="space-y-0.5">
                <p className="text-[11px] text-text-tertiary">Estudiante Acreditado:</p>
                <p className="text-white font-semibold font-sans text-xs sm:text-sm">{personal.fullName}</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[11px] text-text-tertiary">Fecha & Horas:</p>
                <p className="text-blue-300 font-semibold text-xs">
                  {activeModalCert.issueDate} • {activeModalCert.hours} hrs de formación
                </p>
              </div>
              {activeModalCert.credentialId && (
                <div className="sm:col-span-2 space-y-0.5 pt-1 border-t border-white/[0.04]">
                  <p className="text-[11px] text-text-tertiary">Código Criptográfico de Verificación:</p>
                  <p className="text-violet-300 select-all break-all text-[11px]">{activeModalCert.credentialId}</p>
                </div>
              )}
            </div>

            {/* Modal Bottom Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
              {activeModalCert.credentialId && (
                <button
                  type="button"
                  onClick={() => handleCopyCode(activeModalCert.credentialId)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-white/90 transition-all cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold text-[11px]">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white/70" />
                      <span className="text-[11px]">Copiar código</span>
                    </>
                  )}
                </button>
              )}

              <div className="flex flex-wrap items-center gap-2">
                {activeModalCert.pdfUrl && (
                  <a
                    href={activeModalCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 hover:text-white transition-all"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Descargar PDF</span>
                  </a>
                )}

                <ModernButton
                  variant="primary"
                  size="sm"
                  href={activeModalCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Verificar en Platzi
                </ModernButton>

                <button
                  type="button"
                  onClick={() => setActiveModalCert(null)}
                  className="px-3 py-1.5 text-xs font-medium rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default CertificatesSection;
