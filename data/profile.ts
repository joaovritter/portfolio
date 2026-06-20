export const profile = {
  name: "João Vitor Ritter",
  fullName: "João Vitor Dos Santos Ritter",
  role: "Desenvolvedor Full Stack & Especialista em Soluções de TI",
  shortRole: "Full Stack Developer",
  location: "Santa Maria — RS, Brasil",
  email: "joaovritter2004@gmail.com",
  phone: "(55) 99963-3909",
  whatsapp: "5599963390 9".replace(/\s/g, ""), // 55 + número
  // Caminho do currículo dentro de /public — troque o arquivo se quiser
  resume: "/curriculo-joao-vitor-ritter.pdf",

  // Frases do Hero
  heroGreeting: "Olá, eu sou",
  heroHeadline: "João Vitor Ritter",
  heroTagline:
    "Transformo problemas complexos em sistemas eficientes, escaláveis e limpos — do banco de dados à interface do usuário.",

  // Sobre
  aboutTitle: "Muito além do código: construindo ecossistemas completos.",
  aboutParagraphs: [
    "Sou estudante de Sistemas de Informação (7º semestre na UFN) e desenvolvedor apaixonado por arquitetura de software e resolução estrutural de problemas.",
    "Atualmente atuo na equipe de Tecnologia da Informação do Ministério Público do Trabalho (MPT), onde garanto a estabilidade da infraestrutura e presto suporte direto, além de desenvolver sistemas e automações para resolver demandas reais da instituição.",
    "Transito com facilidade entre back-end e front-end, construindo desde interfaces responsivas e apps mobile até integrações complexas de APIs, serviços em nuvem e inteligência artificial — sempre com foco em código limpo e alinhado ao negócio.",
  ],

  socials: {
    github: "https://github.com/joaovritter",
    linkedin: "https://www.linkedin.com/in/joaovritter",
    instagram: "https://www.instagram.com/joao_vritter",
  },

  // Estatísticas exibidas no Hero / Sobre
  stats: [
    { value: "7º", label: "Semestre em S.I." },
    { value: "3+", label: "Anos com tecnologia" },
    { value: "∞", label: "Vontade de aprender" },
  ],
};

export const education = {
  course: "Bacharelado em Sistemas de Informação",
  institution: "Universidade Franciscana (UFN)",
  period: "2023 — Atualmente",
  semester: "7º semestre",
  focus:
    "Desenvolvimento de software, lógica estruturada, arquitetura de sistemas de informação e banco de dados.",
};
