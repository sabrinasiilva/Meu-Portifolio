# Portfólio · Sabrina Silva

Meu portfólio pessoal: experiência, projetos e contato, com um estudo de caso do CO2Bank.

**[sabrinasiilva.github.io/Meu-Portifolio](https://sabrinasiilva.github.io/Meu-Portifolio/)**

## Tecnologias

React 19 · TypeScript · Tailwind CSS 4 · Vite · GitHub Actions · GitHub Pages

## O que tem aqui

- Duas páginas: o portfólio e o [estudo de caso do CO2Bank](https://sabrinasiilva.github.io/Meu-Portifolio/co2bank.html)
- Versão em português e em inglês, com o conteúdo tipado em `src/content`
- Tema claro e escuro, que respeita a preferência do sistema e lembra a escolha
- Menu que acompanha a seção visível, animações de entrada e vídeo que só toca quando aparece na tela
- Respeita `prefers-reduced-motion` e tem atalho "Pular para o conteúdo" para quem navega pelo teclado

## Estrutura

```
src/
├── content/      # textos em pt e en, tipados por types.ts, e os links
├── context/      # idioma e tema (Preferences)
├── hooks/        # useScrollSpy e useAutoplay
├── components/   # seções e componentes reaproveitados
└── pages/        # HomePage e CaseStudyPage
public/           # imagens, vídeo e currículo
```

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicação

A cada push na `main`, o GitHub Actions ([deploy.yml](.github/workflows/deploy.yml)) roda a checagem de tipos, gera o build e publica no GitHub Pages.
