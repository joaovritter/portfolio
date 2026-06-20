"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { profile } from "@/data/profile";

const links = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "projetos", label: "Projetos" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line glass py-3"
            : "border-b border-transparent py-5"
        }`}
      >
        <nav className="container-x flex items-center justify-between">
          <button
            onClick={() => go("inicio")}
            className="group flex items-center gap-2.5"
            aria-label="Ir para o início"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface2 font-display text-sm font-bold text-accent transition-colors group-hover:border-accent/50">
              JR
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-wide text-sand sm:block">
              João Vitor
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                    active === link.id
                      ? "text-sand"
                      : "text-muted hover:text-sand"
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-line bg-surface2"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              download
              className="hidden items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent/20 hover:border-accent/70 sm:inline-flex"
            >
              <FiDownload className="text-base" />
              Currículo
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface2 text-sand lg:hidden"
              aria-label="Abrir menu"
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-base/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-x-4 top-24 rounded-3xl border border-line bg-surface p-3"
            >
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => go(link.id)}
                      className={`w-full rounded-2xl px-4 py-3 text-left text-base transition-colors ${
                        active === link.id
                          ? "bg-surface2 text-sand"
                          : "text-muted hover:bg-surface2 hover:text-sand"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="mt-1 px-1">
                  <a
                    href={profile.resume}
                    download
                    className="flex items-center justify-center gap-2 rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 font-medium text-accent"
                  >
                    <FiDownload /> Baixar Currículo
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
