"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink, FiImage } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projetos" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos em destaque"
          description="Clique em um projeto para ver os detalhes, a galeria de imagens e o link de acesso. As imagens podem ser abertas em tela cheia."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const usingThumb = !!project.thumbnail;
  // Detecta capa vertical (app mobile) p/ mostrar inteira em vez de cortar
  const [coverPortrait, setCoverPortrait] = useState(false);
  const containCover = usingThumb || coverPortrait;

  // Inclinação 3D que segue o mouse (spring p/ suavizar)
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18, mass: 0.4 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18, mass: 0.4 });

  // Posição do brilho (glow) que acompanha o cursor
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgba(203,184,157,0.16), transparent 60%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1
    rx.set((0.5 - py) * 8); // graus
    ry.set((px - 0.5) * 10);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.article
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Ver detalhes de ${project.title}`}
        whileHover={reduce ? undefined : { scale: 1.015 }}
        style={{ rotateX: rx, rotateY: ry }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-300 [backface-visibility:hidden] hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      >
        {/* Brilho que segue o cursor */}
        <motion.div
          aria-hidden
          style={{ background: glow }}
          className="pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Capa */}
        <div
          className={`relative block aspect-[16/10] w-full overflow-hidden ${
            containCover ? "bg-gradient-to-br from-surface2 to-surface" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumbnail ?? project.images[0].src}
            alt={
              project.thumbnail
                ? project.title
                : project.images[0].caption || project.title
            }
            onLoad={
              usingThumb
                ? undefined
                : (e) =>
                    setCoverPortrait(
                      e.currentTarget.naturalHeight > e.currentTarget.naturalWidth
                    )
            }
            className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
              usingThumb
                ? "object-contain p-8"
                : coverPortrait
                  ? "object-contain p-3"
                  : "object-cover"
            }`}
          />
          {!containCover && (
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent opacity-90" />
          )}

          {project.images.length > 1 && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-base/60 px-3 py-1 text-xs text-sand backdrop-blur">
              <FiImage size={12} /> {project.images.length}
            </span>
          )}

          <span className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-sand text-base opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <FiArrowUpRight size={20} />
          </span>
        </div>

        {/* Corpo */}
        <div className="relative z-20 flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold text-sand transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-surface2 px-2.5 py-1 text-xs text-muted"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 border-t border-line pt-4 text-sm">
            <span className="inline-flex items-center gap-1.5 font-medium text-sand transition-colors group-hover:text-accent">
              Ver detalhes
              <FiArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span className="ml-auto flex items-center gap-3 text-muted">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Repositório no GitHub"
                  className="transition-colors hover:text-accent"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub size={18} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Acessar projeto"
                  className="transition-colors hover:text-accent"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink size={18} />
                </a>
              )}
            </span>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
