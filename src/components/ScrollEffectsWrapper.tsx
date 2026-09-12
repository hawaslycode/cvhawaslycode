/* ─────────────────────────────────────────────────────────────
   ScrollEffectsWrapper — IntersectionObserver Reveal Wrapper
   Smooth GPU-accelerated fade-in & translation animations
   as elements enter the viewport during scroll.
   ───────────────────────────────────────────────────────────── */

import {
  type ReactNode,
  type ElementType,
  type HTMLAttributes,
  useState,
  useEffect,
  useRef,
  forwardRef,
} from 'react';

export type ScrollDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface ScrollEffectsWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** Direction from which element translates into view */
  direction?: ScrollDirection;
  /** Stagger delay in milliseconds */
  delay?: number;
  /** Animation duration in milliseconds */
  duration?: number;
  /** Intersection threshold between 0 and 1 */
  threshold?: number;
  /** Root margin offset for triggering */
  rootMargin?: string;
  /** Whether animation triggers only once */
  once?: boolean;
  /** Semantic HTML element type */
  as?: ElementType;
  /** Extra Tailwind classes */
  className?: string;
}

const getInitialTransform = (direction: ScrollDirection): string => {
  switch (direction) {
    case 'up':
      return 'translate3d(0, 36px, 0)';
    case 'down':
      return 'translate3d(0, -36px, 0)';
    case 'left':
      return 'translate3d(36px, 0, 0)';
    case 'right':
      return 'translate3d(-36px, 0, 0)';
    case 'none':
    default:
      return 'none';
  }
};

export const ScrollEffectsWrapper = forwardRef<HTMLElement, ScrollEffectsWrapperProps>(
  (
    {
      children,
      direction = 'up',
      delay = 0,
      duration = 700,
      threshold = 0.15,
      rootMargin = '0px 0px -40px 0px',
      once = true,
      as: Component = 'div',
      className = '',
      style,
      ...rest
    },
    forwardedRef,
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const localRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const targetElement = localRef.current;
      if (!targetElement) return;

      // Fallback if IntersectionObserver is not supported
      if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
        setIsVisible(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (once) {
                observer.unobserve(entry.target);
              }
            } else if (!once) {
              setIsVisible(false);
            }
          });
        },
        {
          threshold,
          rootMargin,
        },
      );

      observer.observe(targetElement);

      return () => {
        observer.disconnect();
      };
    }, [threshold, rootMargin, once]);

    const transitionStyles = {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate3d(0, 0, 0)' : getInitialTransform(direction),
      transitionProperty: 'opacity, transform',
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: `${delay}ms`,
      willChange: isVisible ? 'auto' : 'opacity, transform',
      ...style,
    };

    return (
      <Component
        ref={(node: HTMLElement | null) => {
          localRef.current = node;
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        className={className}
        style={transitionStyles}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

ScrollEffectsWrapper.displayName = 'ScrollEffectsWrapper';

export default ScrollEffectsWrapper;
