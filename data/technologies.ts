import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiFlutter,
  SiDart,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiSpringboot,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGooglecloud,
  SiDocker,
  SiLinux,
  SiGit,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { FiLayers, FiServer, FiCpu, FiCheckCircle, FiTerminal } from "react-icons/fi";

export type TechCategory =
  | "Front-end & Mobile"
  | "Back-end & APIs"
  | "Banco de Dados"
  | "Cloud & DevOps"
  | "Arquitetura & IA";

export type Tech = {
  name: string;
  icon: IconType;
  color: string;
  category: TechCategory;
};

export const techCategories: { label: TechCategory; hint: string }[] = [
  { label: "Front-end & Mobile", hint: "Interfaces & apps" },
  { label: "Back-end & APIs", hint: "Servidores & integrações" },
  { label: "Banco de Dados", hint: "Persistência & BaaS" },
  { label: "Cloud & DevOps", hint: "Infra & nuvem" },
  { label: "Arquitetura & IA", hint: "Boas práticas & LLMs" },
];

export const technologies: Tech[] = [
  // Front-end & Mobile
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Front-end & Mobile" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", category: "Front-end & Mobile" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42B883", category: "Front-end & Mobile" },
  { name: "React Native", icon: SiReact, color: "#61DAFB", category: "Front-end & Mobile" },
  { name: "Flutter", icon: SiFlutter, color: "#54C5F8", category: "Front-end & Mobile" },
  { name: "Dart", icon: SiDart, color: "#0175C2", category: "Front-end & Mobile" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Front-end & Mobile" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Front-end & Mobile" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "Front-end & Mobile" },
  { name: "CSS3", icon: SiCss, color: "#1572B6", category: "Front-end & Mobile" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", category: "Front-end & Mobile" },

  // Back-end & APIs
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", category: "Back-end & APIs" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", category: "Back-end & APIs" },
  { name: "Java", icon: FaJava, color: "#E76F00", category: "Back-end & APIs" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", category: "Back-end & APIs" },
  { name: "Python", icon: SiPython, color: "#FFD43B", category: "Back-end & APIs" },
  { name: "APIs REST", icon: FiServer, color: "#CBB89D", category: "Back-end & APIs" },

  // Banco de Dados
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Banco de Dados" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Banco de Dados" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Banco de Dados" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "Banco de Dados" },

  // Cloud & DevOps
  { name: "AWS", icon: FaAws, color: "#FF9900", category: "Cloud & DevOps" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4", category: "Cloud & DevOps" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "Cloud & DevOps" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", category: "Cloud & DevOps" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Cloud & DevOps" },

  // Arquitetura & IA
  { name: "Clean Architecture", icon: FiLayers, color: "#CBB89D", category: "Arquitetura & IA" },
  { name: "Padrão MVC", icon: FiTerminal, color: "#CBB89D", category: "Arquitetura & IA" },
  { name: "Testes Unitários", icon: FiCheckCircle, color: "#CBB89D", category: "Arquitetura & IA" },
  { name: "Integração com LLMs", icon: FiCpu, color: "#CBB89D", category: "Arquitetura & IA" },
];
