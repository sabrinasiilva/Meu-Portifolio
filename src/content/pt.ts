import { links } from './links'
import type { Content } from './types'

export const pt: Content = {
  docTitle: 'Sabrina Silva · Desenvolvedora de Software',
  ui: {
    skipToContent: 'Pular para o conteúdo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    toDark: 'Ativar tema escuro',
    toLight: 'Ativar tema claro',
    switchLang: 'Switch to English',
    otherLang: 'EN',
    backToPortfolio: 'Portfólio',
    copyHint: 'Clique para copiar',
    copied: 'E-mail copiado!',
    builtWith: 'Feito com React, TypeScript e Tailwind CSS.',
    seeCode: 'Ver o código',
  },
  nav: [
    { id: 'experience', label: 'Experiência' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'Sobre' },
    { id: 'contact', label: 'Contato' },
  ],
  hero: {
    hello: 'Olá, eu sou a',
    photoAlt: 'Foto de Sabrina Silva',
    role: 'Desenvolvedora de Software',
    tagline: 'Transformo regra de negócio em interface.',
    lead:
      'Estagiária de desenvolvimento na Populis, onde crio telas em React e TypeScript e modelo workflows para uma plataforma de folha de pagamento e RH. Estudo Engenharia de Software na UMC.',
    ctaProjects: 'Ver projetos',
    ctaCv: 'Baixar CV',
    videoChip: 'CO2Bank · app Android publicado',
    videoAria: 'Demonstração do app CO2Bank: login, extrato, gráfico de CO2, Open Finance e cupons',
  },
  experience: {
    title: 'Experiência',
    role: 'Desenvolvedora Front-End',
    roleNote: '(Estágio)',
    company: 'Populis · Folha de Pagamento, Sistema e BPO',
    period: 'dez/2025 – atual · Remoto',
    context: 'Plataforma de folha de pagamento e RH usada por empresas de médio e grande porte.',
    bullets: [
      'Modelo processos em BPMN e transformo em workflows automatizados, com regras de negócio configuradas em JSON',
      'Desenvolvo componentes e telas em React + TypeScript, estilizados com Tailwind CSS',
      'Integro o front-end com APIs REST',
      'Participo de features do zero, migrações de versão e melhorias contínuas',
      'Testo em homologação e produção e escrevo a documentação técnica do que entrego',
      'Trabalho em sprints com Scrum, acompanho as demandas em Kanban e versiono no Bitbucket com fluxo de branches',
    ],
    tags: ['BPMN', 'Workflows', 'React', 'TypeScript', 'Tailwind CSS', 'APIs REST', 'Scrum', 'Kanban', 'Bitbucket'],
    educationTitle: 'Formação',
    education: [
      {
        period: '2025 – 2028',
        title: 'Engenharia de Software',
        detail: 'Universidade de Mogi das Cruzes (UMC) · cursando',
      },
      {
        period: '2023 – 2024',
        title: 'Técnico em Desenvolvimento de Sistemas',
        detail: 'ETEC · TCC: VitalVue, app de nutrição feito em Kodular (low-code)',
      },
    ],
  },
  projects: {
    title: 'Projetos',
    featured: {
      badges: ['Publicado', 'Projeto de extensão · UMC'],
      name: 'CO2Bank',
      paragraphs: [
        'Carteira com limite ecológico. Cada compra no cartão mostra o CO2 estimado pela categoria do estabelecimento, e quando o mês passa de 80% do limite, uma IA avisa quais categorias mais pesaram, para ninguém ser pego de surpresa.',
        'App Android em Flutter com verificação facial ao vivo, notificações push e Open Finance simulado. API REST em Flask com arquitetura em camadas, JWT e 87 testes automatizados. A cada atualização, o GitHub Actions roda os testes e publica o app sozinho.',
      ],
      tags: ['Flutter', 'Flask', 'PostgreSQL', 'Gemini', 'ML Kit', 'Firebase', 'GitHub Actions'],
      note: 'Equipe de 5 pessoas, em que fui Product Owner e programadora.',
      apiDocs: 'Documentação da API',
      caseStudy: 'Ver estudo de caso',
      download: 'Baixar para Android',
      code: 'Código',
      imageAlt: 'Tela do CO2Bank com o relatório mensal de CO2 e o gráfico dos últimos seis meses',
    },
    items: [
      {
        name: 'FinPro',
        description:
          'Controle financeiro com login, receitas, despesas e carteira de investimentos. Filtro por período, gráficos, exportação para Excel e testes automatizados.',
        tags: ['Python', 'Flask', 'SQLite', 'Chart.js', 'pytest'],
        image: 'finpro.png',
        imageAlt: 'Dashboard do FinPro com saldo, receitas, despesas e gráficos',
        links: [
          { label: 'Ver online', href: links.finpro.live, primary: true },
          { label: 'Código', href: links.finpro.code },
        ],
        note: 'Conta demo: demo / demo123. O primeiro acesso pode levar uns 30 segundos.',
      },
      {
        name: 'Sistema de Mercado',
        description:
          'Sistema web de gestão de produtos com CRUD completo. Arquitetura MVC + DAO em Java, com consultas parametrizadas contra SQL Injection. Feito em dupla na disciplina de Implementação Orientada a Objetos.',
        tags: ['Java', 'Servlet', 'JSP', 'MySQL', 'MVC'],
        image: 'mercado.png',
        imageAlt: 'Tela de cadastro de produtos do Sistema de Mercado',
        links: [{ label: 'Código', href: links.mercado.code }],
      },
    ],
  },
  skills: {
    title: 'Skills',
    highlights: [
      {
        icon: 'workflow',
        title: 'Workflows e regras de negócio',
        text: 'Modelo processos em BPMN e transformo em fluxos que o sistema executa, com regras configuradas em JSON.',
      },
      {
        icon: 'plug',
        title: 'APIs dos dois lados',
        text: 'No trabalho, integro o front-end com APIs REST. Nos projetos, construo as APIs: autenticação JWT, documentação Swagger e deploy.',
      },
      {
        icon: 'check',
        title: 'Do teste à produção',
        text: 'Testo em homologação e produção, escrevo testes automatizados, versiono com branches e documento o que entrego.',
      },
      {
        icon: 'users',
        title: 'Times ágeis',
        text: 'Trabalho em sprints com Scrum e organizo as demandas em quadros Kanban.',
      },
    ],
    groups: [
      {
        icon: 'work',
        title: 'No trabalho',
        tags: ['BPMN', 'Workflows', 'JSON', 'React', 'TypeScript', 'Tailwind CSS', 'APIs REST', 'Scrum', 'Kanban', 'Git', 'Bitbucket'],
      },
      {
        icon: 'code',
        title: 'Em projetos',
        tags: ['JavaScript', 'HTML/CSS', 'Python', 'Flask', 'Java', 'Servlet/JSP', 'Dart', 'Flutter', 'GitHub Actions', 'MySQL', 'PostgreSQL', 'SQLite', 'Firebase', 'Gemini API', 'pytest'],
      },
      {
        icon: 'study',
        title: 'Estudando',
        tags: ['Spring', 'Docker', 'Jest'],
      },
    ],
  },
  about: {
    title: 'Sobre',
    paragraphs: [
      'Comecei a programar no técnico da ETEC e segui para Engenharia de Software na UMC. Hoje, na Populis, trabalho entre o negócio e o código: modelo processos de RH e folha em BPMN, transformo em workflows e desenvolvo as telas que as pessoas usam.',
      'Gosto de entender o sistema de ponta a ponta. Por isso já passei por front-end, back-end, mobile e testes, e com o CO2Bank comecei a trabalhar com IA. Infraestrutura é a próxima área que quero explorar.',
      'Fora do trabalho, crio ferramentas para resolver problemas meus, como os simulados que uso para estudar para as provas da faculdade.',
    ],
    location: 'Itaquaquecetuba, São Paulo – SP',
    languages: 'Português nativo · Inglês intermediário',
  },
  contact: {
    title: 'Contato',
    lead: 'O jeito mais rápido de falar comigo é por e-mail ou LinkedIn.',
    gmail: 'Gmail',
  },
  caseStudy: {
    docTitle: 'CO2Bank · Estudo de caso · Sabrina Silva',
    badges: ['Publicado', 'Projeto de extensão · UMC 2026', 'Equipe de 5 pessoas'],
    title: 'CO2Bank',
    subtitle: 'Carteira inteligente com limite ecológico',
    intro:
      'Cada compra no cartão mostra o CO2 que gerou, e uma IA avisa antes de a pessoa passar do limite do mês. App Android em Flutter com API em Python e Flask, publicado e com testes rodando a cada atualização.',
    videoAria: 'Demonstração do app CO2Bank',
    links: {
      download: 'Baixar para Android',
      web: 'Ver no navegador',
      code: 'Código do app',
      api: 'Documentação da API',
    },
    problem: {
      title: 'O problema',
      text: 'Os apps de pegada de carbono que existem hoje dependem de digitação manual e só mostram o impacto depois que a compra já aconteceu. Quem quer consumir de forma mais consciente não tem como saber, na hora, quanto cada compra pesa.',
    },
    solution: {
      title: 'A solução',
      features: [
        'O app conecta no banco pelo Open Finance e importa as compras do mês e dos últimos seis meses.',
        'Cada compra mostra o CO2 estimado pela categoria do estabelecimento (MCC).',
        'A pessoa define um limite ecológico mensal, com sugestão baseada nos últimos três meses.',
        'Quando o mês passa de 80% do limite, uma IA escreve um alerta personalizado, na tela inicial e por notificação.',
        'O simulador "Antes de comprar" mostra o impacto de uma compra antes de ela acontecer.',
        'O CO2 economizado vira CO2Coins, que podem ser trocadas por cupons em lojas parceiras.',
      ],
    },
    role: {
      title: 'Meu papel',
      text: 'Fui Product Owner, analista de sistemas e programadora numa equipe de 5 pessoas. Organizei o backlog no Jira em épicos (autenticação, cálculo de CO2, limite, alerta com IA, recompensas e Open Finance), com sprints em Scrum e quadro Kanban, e desenvolvi boa parte da API em Flask e do app em Flutter.',
    },
    decisions: {
      title: 'Decisões técnicas',
      items: [
        {
          title: 'IA com plano B',
          text: 'O Gemini escreve o alerta a partir das categorias que mais pesaram no mês. Se a IA demora ou falha, o sistema envia uma mensagem padrão, e o alerta nunca deixa de chegar por causa de um serviço externo.',
        },
        {
          title: 'Regra de negócio só no backend',
          text: 'Cálculo de CO2, política de limite e recompensas ficam na API, numa arquitetura em camadas em que o domínio não depende de Flask, banco ou API externa. O app só exibe os dados, e as regras ficam fáceis de testar.',
        },
        {
          title: 'Verificação facial no próprio celular',
          text: 'O Google ML Kit confere o rosto ao vivo, sem internet: um rosto só, de frente, sem óculos, e uma piscada como prova de que não é uma foto. A imagem é reduzida antes de ir para o servidor, e a original é apagada do celular.',
        },
        {
          title: 'Publicação automática',
          text: 'A cada push, o GitHub Actions roda os testes, gera o APK e a versão web e publica tudo. Um arquivo de versão publicado junto permite que o app avise quando existe uma versão nova.',
        },
      ],
    },
    architecture: {
      title: 'Arquitetura',
      text: 'O app fala com a API por HTTPS. A API é dividida em camadas: interface (rotas Flask), aplicação (casos de uso) e domínio (regras puras), com as integrações externas isoladas na infraestrutura.',
      app: 'App Flutter (Android)',
      appItems: ['ML Kit · verificação facial', 'Biometria e PIN do celular', 'Notificações push'],
      api: 'API REST em Flask',
      apiLayers: ['Interface · rotas e validação', 'Aplicação · casos de uso', 'Domínio · CO2, limite e recompensas'],
      database: 'PostgreSQL',
      services: [
        { name: 'Google Gemini', detail: 'alertas com IA' },
        { name: 'Firebase Cloud Messaging', detail: 'notificações push' },
        { name: 'Open Finance', detail: 'simulado no formato oficial' },
        { name: 'Resend', detail: 'e-mails' },
      ],
      ci: 'GitHub Actions: testes, depois APK e site publicados',
    },
    numbers: {
      title: 'Em números',
      items: [
        { value: '87', label: 'testes automatizados na API' },
        { value: '5', label: 'pessoas na equipe' },
        { value: '12', label: 'categorias de compra com fator de CO2' },
        { value: '80%', label: 'do limite dispara o alerta da IA' },
      ],
    },
    learnings: {
      title: 'O que aprendi',
      items: [
        'A IA responde muito melhor quando recebe dados reais do usuário, e não uma pergunta genérica.',
        'Todo serviço externo pode falhar. Ter um plano B é o que mantém a experiência confiável.',
        'Separar a regra de negócio da IA e da interface deixa o sistema mais fácil de testar e de mudar.',
      ],
    },
    next: {
      title: 'Próximos passos',
      items: [
        'Integração real com o Open Finance, hoje simulada no formato da API oficial.',
        'Trocar os fatores de CO2 ilustrativos por uma base auditada, como as usadas por bancos.',
      ],
    },
    cta: {
      title: 'Quer conversar sobre o projeto?',
      text: 'Posso explicar cada decisão em detalhe.',
      button: 'Entrar em contato',
    },
  },
}
