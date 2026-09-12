/* ─────────────────────────────────────────────────────────────
   ModernButton — Dynamic Button with Metallic Sheen
   Variants: primary (gradient glow), secondary (glass), ghost,
   icon-only. All with iOS-fluid transitions and ring highlights.
   ───────────────────────────────────────────────────────────── */

import {
  type ReactNode,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  forwardRef,
} from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg';

/* ── Props ─────────────────────────────────────────────────── */

type BaseProps = {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render as <a> instead of <button> */
  href?: string;
  /** Show shimmer overlay animation */
  sheen?: boolean;
  /** Optional leading icon */
  icon?: ReactNode;
  /** Full width */
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ModernButtonProps = ButtonAsButton | ButtonAsAnchor;

/* ── Style Maps ────────────────────────────────────────────── */

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500',
    'text-white font-semibold',
    'ring-1 ring-white/20 hover:ring-white/40',
    'shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-button-hover)]',
    'hover:brightness-110',
  ].join(' '),

  secondary: [
    'bg-white/[0.06] backdrop-blur-lg',
    'text-white/90',
    'border border-white/[0.10] hover:border-white/[0.20]',
    'ring-1 ring-white/[0.06] hover:ring-white/[0.15]',
    'hover:bg-white/[0.10]',
  ].join(' '),

  ghost: [
    'bg-transparent',
    'text-white/70 hover:text-white',
    'hover:bg-white/[0.05]',
  ].join(' '),

  icon: [
    'bg-white/[0.05] backdrop-blur-md',
    'text-white/70 hover:text-white',
    'border border-white/[0.08] hover:border-white/[0.18]',
    'ring-1 ring-white/[0.04] hover:ring-white/[0.12]',
    'hover:bg-white/[0.10]',
    '!p-0',
  ].join(' '),
};

const sizeStyles: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-2.5 text-sm rounded-[var(--radius-button)]',
    lg: 'px-8 py-3.5 text-base rounded-xl',
  },
  secondary: {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-2.5 text-sm rounded-[var(--radius-button)]',
    lg: 'px-8 py-3.5 text-base rounded-xl',
  },
  ghost: {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-5 py-2 text-sm rounded-[var(--radius-button)]',
    lg: 'px-7 py-3 text-base rounded-xl',
  },
  icon: {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-[var(--radius-button)]',
    lg: 'w-12 h-12 rounded-xl',
  },
};

/* ── Component ─────────────────────────────────────────────── */

const ModernButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ModernButtonProps
>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      sheen = variant === 'primary',
      icon,
      fullWidth = false,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const combinedStyles = [
      'inline-flex items-center justify-center gap-2',
      'cursor-pointer select-none',
      'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
      'active:scale-[0.97]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
      'disabled:opacity-40 disabled:pointer-events-none',
      variantStyles[variant],
      sizeStyles[variant][size],
      sheen && 'sheen-effect',
      fullWidth && 'w-full',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const content = (
      <>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {variant === 'icon' ? (!icon ? children : null) : children}
      </>
    );

    if (href) {
      const isInternal = href.startsWith('#');
      const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
      const target = anchorRest.target ?? (isInternal ? undefined : '_blank');
      const rel = anchorRest.rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);

      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedStyles}
          target={target}
          rel={rel}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedStyles}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  },
);

ModernButton.displayName = 'ModernButton';

export default ModernButton;
