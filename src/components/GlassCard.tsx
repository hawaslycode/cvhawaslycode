/* ─────────────────────────────────────────────────────────────
   GlassCard — Liquid Glass Container
   Base translucent card with aurora-inspired border gradients,
   backdrop blur, and subtle inner glow. Reusable everywhere.
   ───────────────────────────────────────────────────────────── */

import { type ReactNode, type HTMLAttributes, forwardRef } from 'react';

type GlassIntensity = 'subtle' | 'medium' | 'strong';
type GlassGlow = 'none' | 'blue' | 'violet' | 'cyan';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Controls the opacity of the glass background */
  intensity?: GlassIntensity;
  /** Optional colored glow effect around the card */
  glow?: GlassGlow;
  /** Adds the animated gradient border overlay */
  borderGradient?: boolean;
  /** Hover lift animation */
  hover?: boolean;
  /** Extra Tailwind classes */
  className?: string;
}

const intensityMap: Record<GlassIntensity, string> = {
  subtle: 'bg-white/[0.03] backdrop-blur-lg',
  medium: 'bg-white/[0.05] backdrop-blur-xl',
  strong: 'bg-white/[0.08] backdrop-blur-2xl',
};

const glowMap: Record<GlassGlow, string> = {
  none: '',
  blue: 'shadow-[0_0_40px_rgba(59,130,246,0.1)]',
  violet: 'shadow-[0_0_40px_rgba(139,92,246,0.1)]',
  cyan: 'shadow-[0_0_40px_rgba(6,182,212,0.1)]',
};

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      intensity = 'medium',
      glow = 'none',
      borderGradient = true,
      hover = true,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const baseStyles = [
      'relative',
      'rounded-[var(--radius-glass)]',
      'border border-white/[0.08]',
      'shadow-[var(--shadow-glass)]',
      intensityMap[intensity],
      glowMap[glow],
      hover &&
        'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[var(--shadow-glass-hover)] hover:border-white/[0.14] hover:-translate-y-0.5',
      borderGradient && 'glass-border-gradient',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={baseStyles} {...rest}>
        {children}
      </div>
    );
  },
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;
