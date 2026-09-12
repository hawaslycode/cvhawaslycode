/* ─────────────────────────────────────────────────────────────
   SectionContainer — Layout Wrapper
   Standardizes section padding, max-width, and spacing.
   Includes optional animated aurora background blobs.
   ───────────────────────────────────────────────────────────── */

import { type ReactNode, type HTMLAttributes, forwardRef } from 'react';

interface AuroraBlob {
  color: string;
  size: string;
  position: string;
  delay?: string;
}

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** HTML id for anchor navigation */
  sectionId?: string;
  /** Show floating aurora gradient blobs in background */
  aurora?: boolean;
  /** Custom aurora blobs config */
  auroraBlobs?: AuroraBlob[];
  /** Reduce vertical padding */
  compact?: boolean;
  /** Extra Tailwind classes for the section element */
  className?: string;
  /** Extra Tailwind classes for the inner container */
  innerClassName?: string;
}

const defaultBlobs: AuroraBlob[] = [
  {
    color: 'bg-blue-500/15',
    size: 'w-[500px] h-[500px]',
    position: '-top-40 -left-40',
  },
  {
    color: 'bg-violet-500/10',
    size: 'w-[400px] h-[400px]',
    position: '-bottom-32 -right-32',
    delay: 'animation-delay: 5s',
  },
  {
    color: 'bg-cyan-500/8',
    size: 'w-[350px] h-[350px]',
    position: 'top-1/2 left-1/3',
    delay: 'animation-delay: 10s',
  },
];

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  (
    {
      children,
      sectionId,
      aurora = false,
      auroraBlobs = defaultBlobs,
      compact = false,
      className = '',
      innerClassName = '',
      ...rest
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        id={sectionId}
        className={`relative overflow-hidden ${compact ? 'py-16 md:py-20' : 'py-20 md:py-28 lg:py-32'} ${className}`}
        {...rest}
      >
        {/* Aurora background blobs */}
        {aurora &&
          auroraBlobs.map((blob, i) => (
            <div
              key={i}
              className={`aurora-blob ${blob.color} ${blob.size} ${blob.position}`}
              style={blob.delay ? { animationDelay: blob.delay.replace('animation-delay: ', '') } : undefined}
              aria-hidden="true"
            />
          ))}

        {/* Content container */}
        <div
          className={`relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 ${innerClassName}`}
        >
          {children}
        </div>
      </section>
    );
  },
);

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
