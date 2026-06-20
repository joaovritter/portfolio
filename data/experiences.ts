export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Estagiário de TI & Desenvolvedor de Soluções",
    company: "Ministério Público do Trabalho (MPT)",
    period: "Out 2025 — Presente",
    current: true,
    description:
      "Suporte técnico de hardware e software em ambiente corporativo formal de alta responsabilidade, somado ao desenvolvimento de sistemas e automações para otimizar as rotinas da instituição.",
    highlights: [
      "Desenvolvimento de sistemas paralelos e automações para problemas práticos",
      "Suporte técnico direto a usuários (hardware, software e sistemas internos)",
      "Manutenção de infraestrutura de TI e organização dos ambientes",
      "Manuseio de informações sensíveis com confidencialidade e ética",
    ],
  },
  {
    role: "Desenvolvedor Front-End",
    company: "eGestor (ZipLine)",
    period: "Set 2025 — Out 2025",
    description:
      "Prototipação, desenvolvimento e manutenção de layouts web com foco total em usabilidade, UI/UX e organização visual da interface.",
    highlights: [
      "Implementação de interfaces modernas com HTML, CSS e JavaScript",
      "Contato direto com clientes para alinhamento de demandas",
      "Tradução de necessidades de negócio em ajustes técnicos",
      "Melhoria contínua da experiência do usuário (UX)",
    ],
  },
  {
    role: "Montador Eletrônico (Jovem Aprendiz)",
    company: "Digitalli Eletrônica",
    period: "Abr 2022 — Fev 2023",
    description:
      "Início da jornada na tecnologia atuando na montagem de equipamentos eletrônicos aplicados à automação industrial, construindo uma base sólida em hardware.",
    highlights: [
      "Montagem de equipamentos eletrônicos para automação industrial",
      "Base sólida em hardware e atenção a detalhes",
    ],
  },
];
