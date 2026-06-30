"use client";

import * as React from "react";

/**
 * Botão "liquid glass" (vidro líquido) — recriação autossuficiente do modelo
 * do 21st.dev (Ali Imam), sem dependências externas.
 *
 * O efeito combina 3 camadas:
 *  1. Refração: filtro SVG (#liquid-glass) aplicado no backdrop (Chromium).
 *  2. Frost: blur + saturate no backdrop (todos os navegadores).
 *  3. Vidro: gradiente translúcido + box-shadow de borda/realce.
 *
 * Renderiza como <button> por padrão, ou como <a> se receber `href`.
 * Requer <LiquidGlassFilter /> montado UMA vez na página (veja o layout).
 */

const BASE =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full " +
  "font-semibold text-sand transition-transform duration-300 will-change-transform " +
  "hover:scale-[1.03] active:scale-[0.97] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base " +
  "shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-2px_5px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.08),0_12px_30px_-12px_rgba(0,0,0,0.65)]";

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
} as const;

function Glass() {
  return (
    <>
      {/* Frost — funciona em todos os navegadores */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-[inherit]"
        style={{
          backdropFilter: "blur(6px) saturate(1.6)",
          WebkitBackdropFilter: "blur(6px) saturate(1.6)",
        }}
      />
      {/* Refração — filtro SVG no backdrop (melhora em navegadores Chromium) */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-[inherit]"
        style={{ backdropFilter: "url(#liquid-glass)" }}
      />
      {/* Corpo de vidro translúcido */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/[0.14] via-white/[0.05] to-white/[0.02]"
      />
      {/* Brilho superior (sheen) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-4 top-0 h-px rounded-full bg-white/50"
      />
    </>
  );
}

type LiquidButtonProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof SIZES;
  /** Se informado, renderiza como <a>; caso contrário, como <button>. */
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function LiquidButton({
  href,
  className = "",
  size = "md",
  children,
  ...rest
}: LiquidButtonProps) {
  const cls = `${BASE} ${SIZES[size]} ${className}`;
  const inner = (
    <>
      <Glass />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      className={cls}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
}

/**
 * Filtro SVG de refração. Monte UMA única vez na árvore (ex.: no layout),
 * pois todos os botões referenciam o mesmo id `#liquid-glass`.
 */
export function LiquidGlassFilter() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed -left-[9999px] h-0 w-0"
    >
      <defs>
        <filter
          id="liquid-glass"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.014"
            numOctaves="2"
            seed="42"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="34"
            xChannelSelector="R"
            yChannelSelector="G"
            result="disp"
          />
          <feGaussianBlur in="disp" stdDeviation="0.4" />
        </filter>
      </defs>
    </svg>
  );
}
