"use client";

import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiCalendar, FiDownload } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { LiquidButton } from "./LiquidButton";
import { education, profile } from "@/data/profile";

export default function Education() {
  return (
    <section id="formacao" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Formação" title="Formação acadêmica" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 overflow-hidden rounded-3xl border border-line bg-surface"
        >
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent">
                  <FiAward size={22} />
                </span>
                <span className="rounded-full border border-line bg-surface2 px-3 py-1 text-xs font-medium text-accent">
                  {education.semester}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold text-sand">
                {education.course}
              </h3>
              <p className="mt-1 font-medium text-accent2">{education.institution}</p>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <FiCalendar className="text-accent" /> {education.period}
                </span>
              </div>

              <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-muted">
                <FiBookOpen className="mt-0.5 shrink-0 text-accent" />
                <span>{education.focus}</span>
              </p>
            </div>

            {/* Bloco de CTA do currículo */}
            <div className="relative overflow-hidden rounded-2xl border border-line bg-base p-7">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(110% 80% at 100% 0%, rgba(203,184,157,0.16), transparent 60%)",
                }}
              />
              <div className="relative">
                <h4 className="font-display text-lg font-semibold text-sand">
                  Quer os detalhes completos?
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Baixe meu currículo em PDF com todo o histórico de experiências,
                  habilidades técnicas e formação.
                </p>
                <LiquidButton
                  href={profile.resume}
                  download
                  className="mt-5 ring-1 ring-accent/30"
                >
                  <FiDownload /> Baixar currículo
                </LiquidButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
