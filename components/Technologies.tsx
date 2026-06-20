"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  technologies,
  techCategories,
  type Tech,
  type TechCategory,
} from "@/data/technologies";

function Pill({ tech, dimmed }: { tech: Tech; dimmed: boolean }) {
  const Icon = tech.icon;
  return (
    <div
      className={`group/pill flex shrink-0 select-none items-center gap-2.5 rounded-full border px-5 py-3 transition-all duration-300 ${
        dimmed
          ? "border-line/60 bg-surface/40 opacity-30"
          : "border-line bg-surface2/70 opacity-100 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface2"
      }`}
    >
      <Icon
        size={20}
        style={{ color: tech.color }}
        className="shrink-0 grayscale transition-all duration-300 group-hover/pill:grayscale-0"
      />
      <span className="whitespace-nowrap text-sm font-medium text-sand">
        {tech.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
  active,
}: {
  items: Tech[];
  direction: "left" | "right";
  duration: string;
  active: TechCategory | null;
}) {
  const anim = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  return (
    <div className="mask-fade-x relative flex overflow-hidden py-1.5">
      <div
        className={`flex w-max gap-3 pr-3 ${anim} hover:[animation-play-state:paused]`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {[...items, ...items].map((tech, i) => (
          <Pill
            key={`${tech.name}-${i}`}
            tech={tech}
            dimmed={active !== null && tech.category !== active}
          />
        ))}
      </div>
    </div>
  );
}

export default function Technologies() {
  const [active, setActive] = useState<TechCategory | null>(null);

  // Distribui as techs em 3 trilhas equilibradas
  const rows = useMemo(() => {
    const r: Tech[][] = [[], [], []];
    technologies.forEach((t, i) => r[i % 3].push(t));
    return r;
  }, []);

  return (
    <section id="tecnologias" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Stack & Ferramentas"
          title="Tecnologias que eu uso"
          description="Filtre por área para destacar o que importa. Passe o mouse sobre uma tecnologia para pausar e revelar sua cor."
        />

        {/* Filtro por categoria */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          <button
            onClick={() => setActive(null)}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${
              active === null
                ? "border-accent/60 bg-accent/15 text-accent"
                : "border-line bg-surface2/60 text-muted hover:text-sand"
            }`}
          >
            Todas
          </button>
          {techCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() =>
                setActive((prev) => (prev === cat.label ? null : cat.label))
              }
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                active === cat.label
                  ? "border-accent/60 bg-accent/15 text-accent"
                  : "border-line bg-surface2/60 text-muted hover:text-sand"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Marquees (full-bleed para um efeito mais imersivo) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-12 flex flex-col gap-3"
      >
        <MarqueeRow items={rows[0]} direction="left" duration="44s" active={active} />
        <MarqueeRow items={rows[1]} direction="right" duration="52s" active={active} />
        <MarqueeRow items={rows[2]} direction="left" duration="38s" active={active} />
      </motion.div>
    </section>
  );
}
