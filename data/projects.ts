export type Project = {
  id: string;
  title: string;
  /** Frase curta exibida no card */
  tagline: string;
  /** Descrição completa exibida no modal */
  description: string;
  /** Lista de destaques / o que foi feito */
  highlights: string[];
  /** Stack usada — aparece como tags */
  stack: string[];
  year: string;
  /** Link do repositório (deixe "" para esconder o botão) */
  github?: string;
  /** Link do deploy / projeto no ar (deixe "" para esconder o botão) */
  demo?: string;
  /**
   * Imagens do projeto (sem vídeo). Coloque os arquivos em /public/projects/
   * e referencie aqui. A primeira imagem é usada como capa do card.
   */
  images: string[];
};

/**
 * COMO ADICIONAR UM PROJETO:
 * 1. Coloque as imagens em  public/projects/  (ex.: public/projects/meu-app-1.jpg)
 * 2. Duplique um bloco abaixo e ajuste os campos.
 * 3. O botão "Acessar projeto" usa `demo`; o de código usa `github`.
 *
 * As imagens atuais são placeholders (.svg) só para você ver o layout —
 * basta substituir pelos prints reais dos seus projetos.
 */
export const projects: Project[] = [
  {
    id: "projeto-1",
    title: "Sistema de Agendamento — Clínica",
    tagline: "Plataforma web para gestão de consultas e pacientes.",
    description:
      "Aplicação completa para administração de uma clínica: agendamento de consultas, gestão de pacientes e painel administrativo. Foco em uma interface limpa, responsiva e em um fluxo de uso rápido para a recepção.",
    highlights: [
      "Painel administrativo com visão geral de consultas do dia",
      "Cadastro e busca de pacientes",
      "Interface responsiva pensada para uso em recepção e mobile",
      "Arquitetura organizada com separação de responsabilidades",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    year: "2025",
    github: "https://github.com/joaovritter",
    demo: "",
    images: [
      "/projects/placeholder-1.svg",
      "/projects/placeholder-2.svg",
      "/projects/placeholder-3.svg",
    ],
  },
  {
    id: "projeto-2",
    title: "Automação de Rotinas Internas",
    tagline: "Scripts e integrações que eliminam tarefas repetitivas.",
    description:
      "Conjunto de automações e integrações de APIs criadas para otimizar rotinas internas e reduzir trabalho manual, conectando sistemas distintos e gerando relatórios automaticamente.",
    highlights: [
      "Integração entre múltiplos sistemas via APIs REST e webhooks",
      "Geração automática de relatórios",
      "Redução significativa de trabalho manual repetitivo",
    ],
    stack: ["Node.js", "Python", "REST APIs", "Docker"],
    year: "2025",
    github: "https://github.com/joaovritter",
    demo: "",
    images: ["/projects/placeholder-2.svg", "/projects/placeholder-1.svg"],
  },
  {
    id: "projeto-3",
    title: "App Mobile — Conceito",
    tagline: "Aplicativo multiplataforma com foco em UX.",
    description:
      "Aplicativo mobile multiplataforma construído com foco em experiência do usuário, navegação fluida e componentização. Integra autenticação e consumo de API em tempo real.",
    highlights: [
      "Interface fluida e componentizada",
      "Autenticação e consumo de API em tempo real",
      "Build único para Android e iOS",
    ],
    stack: ["React Native", "TypeScript", "Firebase"],
    year: "2024",
    github: "https://github.com/joaovritter",
    demo: "",
    images: ["/projects/placeholder-3.svg", "/projects/placeholder-1.svg"],
  },
];
