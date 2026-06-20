"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experiencia" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência profissional"
          description="Da base em hardware ao desenvolvimento de soluções completas — cada etapa construiu a forma como penso e entrego software hoje."
        />

        <div className="relative mt-16">
          {/* Linha central da timeline */}
          <div
            className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-line to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={exp.company} className="relative md:grid md:grid-cols-2 md:gap-12">
                  {/* Marcador */}
                  <span
                    className="absolute left-[10px] top-2 z-10 grid h-5 w-5 place-items-center md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  >
                    <span className="h-3 w-3 rounded-full bg-accent ring-4 ring-base" />
                    {exp.current && (
                      <span className="absolute h-5 w-5 animate-ping rounded-full bg-accent/40" />
                    )}
                  </span>

                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`ml-12 rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-accent/30 md:ml-0 ${
                      isLeft
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-2"
                    }`}
                  >
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="rounded-full border border-line bg-surface2 px-3 py-1 text-xs font-medium text-accent">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                          Atual
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold text-sand">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent2">{exp.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {exp.description}
                    </p>

                    <ul
                      className={`mt-4 flex flex-col gap-2 ${
                        isLeft ? "md:items-end" : ""
                      }`}
                    >
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className={`flex items-start gap-2 text-sm text-muted ${
                            isLeft ? "md:flex-row-reverse md:text-right" : ""
                          }`}
                        >
                          <FiCheck className="mt-0.5 shrink-0 text-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
