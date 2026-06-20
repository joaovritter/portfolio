"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="flex flex-col gap-7">
          <SectionHeading eyebrow="Sobre mim" title={profile.aboutTitle} />
          <div className="flex flex-col gap-4">
            {profile.aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i} as="span">
                <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3}>
            <div className="mt-2 flex flex-wrap gap-3">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-line bg-surface px-5 py-4"
                >
                  <div className="font-display text-3xl font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Cartão visual */}
        <Reveal delay={1} className="relative">
          <div className="relative mx-auto max-w-sm">
            <motion.div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-accent/10 blur-2xl"
              animate={{ opacity: [0.4, 0.75, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-surface2 to-surface p-1.5">
              <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[1.6rem] bg-base">
                <div className="absolute inset-0 grain opacity-70" aria-hidden />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 50% 0%, rgba(203,184,157,0.18), transparent 60%)",
                  }}
                />
                {/*
                  DICA: troque este monograma por uma foto sua.
                  Coloque /public/eu.jpg e use:
                  <img src="/eu.jpg" alt="João Vitor" className="absolute inset-0 h-full w-full object-cover" />
                */}
                <div className="relative text-center">
                  <div className="font-display text-7xl font-bold text-gradient">JV</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.3em] text-muted">
                    Ritter
                  </div>
                </div>
              </div>
            </div>

            {/* Etiqueta flutuante */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-line glass px-4 py-3 sm:-left-6"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-accent">
                <FiBriefcase size={16} />
              </span>
              <div>
                <div className="text-sm font-semibold text-sand">MPT</div>
                <div className="text-xs text-muted">TI & Desenvolvimento</div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
