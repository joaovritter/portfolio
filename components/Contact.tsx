"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/profile";

const whatsappLink = `https://wa.me/55${profile.phone.replace(/\D/g, "")}`;

const socials = [
  { href: profile.socials.github, icon: FaGithub, label: "GitHub" },
  { href: profile.socials.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
  { href: profile.socials.instagram, icon: FaInstagram, label: "Instagram" },
];

export default function Contact() {
  return (
    <footer id="contato" className="relative scroll-mt-24 overflow-hidden pt-24 sm:pt-32">
      {/* Brilho de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(203,184,157,0.12), transparent 70%)",
        }}
      />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-accent/60" aria-hidden />
            Contato
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-sand sm:text-5xl md:text-6xl">
            Tem alguma ideia ou sugestão?
            <span className="block text-gradient">Bora conversar.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
            Seja para o desenvolvimento de um aplicativo, a estruturação de um sistema
            ou uma oportunidade de equipe, estou à disposição para conversar.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-sand px-6 py-3 text-sm font-semibold text-base transition-transform hover:scale-[1.03]"
            >
              <FiMail /> {profile.email}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface2/60 px-6 py-3 text-sm font-semibold text-sand transition-all hover:border-accent/50"
            >
              <FaWhatsapp className="text-accent" /> WhatsApp
              <FiArrowUpRight className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Cards de contato */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            { icon: FiMail, label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
            { icon: FiPhone, label: "Telefone", value: profile.phone, href: whatsappLink },
            { icon: FiMapPin, label: "Localização", value: "Santa Maria — RS", href: undefined },
          ].map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="flex h-full flex-col items-center gap-2 rounded-2xl border border-line bg-surface px-4 py-6 text-center transition-colors hover:border-accent/30">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon size={18} />
                </span>
                <span className="text-xs uppercase tracking-wider text-faint">{label}</span>
                <span className="text-sm font-medium text-sand">{value}</span>
              </div>
            );
            return href ? (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        {/* Rodapé */}
        <div className="mt-20 flex flex-col items-center gap-6 border-t border-line py-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface2 font-display text-sm font-bold text-accent">
              JR
            </span>
            <span className="text-sm text-muted">
              © {new Date().getFullYear()} {profile.fullName}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface2/50 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-xs text-faint">Feito com Next.js, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
