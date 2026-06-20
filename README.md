# Portfólio — João Vitor Ritter

Portfólio pessoal **front-end** construído com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** e **tsParticles**. Tema escuro em tons neutros, animações suaves e foco em performance.

## ✨ Seções

- **Hero** — apresentação com partículas, brilhos neutros e spotlight que segue o mouse.
- **Sobre** — quem sou eu + estatísticas.
- **Experiência** — timeline vertical animada.
- **Tecnologias** — marquee infinito (3 trilhas) com filtro por categoria, no lugar de blocos.
- **Projetos** — grid de cards; cada card abre um **modal** com descrição, destaques, stack, links de acesso e **galeria de imagens** (abríveis em **tela cheia**).
- **Formação** — formação acadêmica + download do currículo.
- **Contato** — e-mail, WhatsApp, redes sociais.

---

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

Abra <http://localhost:3000>.

Para gerar o build de produção:

```bash
npm run build
npm start
```

---

## ☁️ Deploy na Vercel (via GitHub)

1. Crie um repositório no GitHub e suba este projeto:
   ```bash
   git init
   git add .
   git commit -m "feat: portfólio"
   git branch -M main
   git remote add origin https://github.com/joaovritter/SEU-REPO.git
   git push -u origin main
   ```
2. Acesse <https://vercel.com/new>, importe o repositório.
3. A Vercel detecta o **Next.js** automaticamente — não precisa configurar nada.
   - Framework Preset: **Next.js**
   - Build Command: `next build` (padrão)
   - Output: padrão
4. Clique em **Deploy**. Pronto. ✅

A cada `git push` na branch `main`, a Vercel faz o deploy automático.

---

## 🛠️ Como personalizar

Todo o conteúdo fica na pasta [`data/`](./data) — você edita só esses arquivos, sem mexer no layout:

| Arquivo | O que editar |
| --- | --- |
| `data/profile.ts` | Nome, cargo, textos do hero/sobre, links sociais, e-mail, telefone, currículo |
| `data/experiences.ts` | Experiências profissionais |
| `data/technologies.ts` | Lista de tecnologias e categorias |
| `data/projects.ts` | Seus projetos (links, descrições e imagens) |

### Trocar o currículo (PDF)

Substitua o arquivo `public/curriculo-joao-vitor-ritter.pdf` (mantenha o mesmo nome) **ou** altere o campo `resume` em `data/profile.ts`.

### Adicionar um projeto com imagens

1. Coloque os prints em `public/projects/` (ex.: `public/projects/meu-app-1.jpg`).
2. Em `data/projects.ts`, adicione um item ao array com:
   - `github` → link do repositório (deixe `""` para esconder o botão)
   - `demo` → link do deploy / projeto no ar (deixe `""` para esconder o botão)
   - `images` → lista dos caminhos das imagens (a 1ª é a capa)

> As imagens atuais (`placeholder-*.svg`) são apenas demonstração — troque pelos seus prints reais.

### Trocar o monograma por uma foto sua

No componente `components/About.tsx` há um comentário mostrando como usar `/public/eu.jpg` no lugar do monograma "JV".

### Mudar as cores

A paleta neutra está em `tailwind.config.ts` (chaves `accent`, `sand`, `surface`, etc.) e em `app/globals.css`. Ajuste ali para mudar o tema inteiro.

---

## 📦 Stack

- [Next.js 15](https://nextjs.org/) · App Router
- [React 19](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [tsParticles](https://particles.js.org/)
- [react-icons](https://react-icons.github.io/react-icons/)
