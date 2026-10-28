import { links } from './links'
import type { Content } from './types'

export const en: Content = {
  docTitle: 'Sabrina Silva · Software Developer',
  ui: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
    switchLang: 'Mudar para português',
    otherLang: 'PT',
    backToPortfolio: 'Portfolio',
    copyHint: 'Click to copy',
    copied: 'Email copied!',
    builtWith: 'Built with React, TypeScript and Tailwind CSS.',
    seeCode: 'See the code',
  },
  nav: [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    hello: "Hi, I'm",
    photoAlt: 'Photo of Sabrina Silva',
    role: 'Software Developer',
    tagline: 'I turn business rules into interfaces.',
    lead:
      'Development intern at Populis, where I build React and TypeScript screens and design workflows for a payroll and HR platform. Software Engineering student at UMC, Brazil.',
    ctaProjects: 'See projects',
    ctaCv: 'Download CV',
    videoChip: 'CO2Bank · Android app, live',
    videoAria: 'CO2Bank app demo: login, statement, CO2 chart, Open Finance and coupons',
  },
  experience: {
    title: 'Experience',
    role: 'Front-End Developer',
    roleNote: '(Intern)',
    company: 'Populis · Payroll, Software and BPO',
    period: 'Dec 2025 – present · Remote',
    context: 'Payroll and HR platform used by mid-size and large companies.',
    bullets: [
      'Design processes in BPMN and turn them into automated workflows, with business rules configured in JSON',
      'Build components and screens in React + TypeScript, styled with Tailwind CSS',
      'Integrate the front-end with REST APIs',
      'Work on new features, version migrations and continuous improvements',
      'Test in staging and production and write technical documentation for what I ship',
      'Work in Scrum sprints, track tasks on Kanban boards and use Bitbucket with a branching workflow',
    ],
    tags: ['BPMN', 'Workflows', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Scrum', 'Kanban', 'Bitbucket'],
    educationTitle: 'Education',
    education: [
      {
        period: '2025 – 2028',
        title: 'Software Engineering',
        detail: 'Universidade de Mogi das Cruzes (UMC) · in progress',
      },
      {
        period: '2023 – 2024',
        title: 'Technical Degree in Systems Development',
        detail: 'ETEC · Final project: VitalVue, a nutrition app built with Kodular (low-code)',
      },
    ],
  },
  projects: {
    title: 'Projects',
    featured: {
      badges: ['Live', 'University extension project · UMC'],
      name: 'CO2Bank',
      paragraphs: [
        'A wallet with an eco limit. Every card purchase shows its estimated CO2 based on the merchant category, and when the month passes 80% of the limit, an AI explains which categories weighed the most, so nobody gets caught off guard.',
        'Android app in Flutter with live face verification, push notifications and simulated Open Finance. REST API in Flask with a layered architecture, JWT and 87 automated tests. On every update, GitHub Actions runs the tests and publishes the app.',
      ],
      tags: ['Flutter', 'Flask', 'PostgreSQL', 'Gemini', 'ML Kit', 'Firebase', 'GitHub Actions'],
      note: 'Team of 5, where I was the Product Owner and a developer.',
      apiDocs: 'API docs',
      caseStudy: 'Read the case study',
      download: 'Download for Android',
      code: 'Code',
      imageAlt: 'CO2Bank screen with the monthly CO2 report and a six-month chart',
    },
    items: [
      {
        name: 'FinPro',
        description:
          'Personal finance app with login, income, expenses and an investment portfolio. Period filters, charts, Excel export and automated tests.',
        tags: ['Python', 'Flask', 'SQLite', 'Chart.js', 'pytest'],
        image: 'finpro.png',
        imageAlt: 'FinPro dashboard with balance, income, expenses and charts',
        links: [
          { label: 'Live demo', href: links.finpro.live, primary: true },
          { label: 'Code', href: links.finpro.code },
        ],
        note: 'Demo account: demo / demo123. The first load may take about 30 seconds.',
      },
      {
        name: 'Market System',
        description:
          'Web app for product management with full CRUD. MVC + DAO architecture in Java, with parameterized queries against SQL injection. Built in a pair for an Object-Oriented Programming course.',
        tags: ['Java', 'Servlet', 'JSP', 'MySQL', 'MVC'],
        image: 'mercado.png',
        imageAlt: 'Product registration screen of the Market System',
        links: [{ label: 'Code', href: links.mercado.code }],
      },
    ],
  },
  skills: {
    title: 'Skills',
    highlights: [
      {
        icon: 'workflow',
        title: 'Workflows and business rules',
        text: 'I design processes in BPMN and turn them into flows the system runs, with rules configured in JSON.',
      },
      {
        icon: 'plug',
        title: 'APIs from both sides',
        text: 'At work, I connect the front-end to REST APIs. In my projects, I build the APIs: JWT authentication, Swagger docs and deployment.',
      },
      {
        icon: 'check',
        title: 'From testing to production',
        text: 'I test in staging and production, write automated tests, use branches and document what I ship.',
      },
      {
        icon: 'users',
        title: 'Agile teams',
        text: 'I work in Scrum sprints and organize tasks on Kanban boards.',
      },
    ],
    groups: [
      {
        icon: 'work',
        title: 'At work',
        tags: ['BPMN', 'Workflows', 'JSON', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Scrum', 'Kanban', 'Git', 'Bitbucket'],
      },
      {
        icon: 'code',
        title: 'In projects',
        tags: ['JavaScript', 'HTML/CSS', 'Python', 'Flask', 'Java', 'Servlet/JSP', 'Dart', 'Flutter', 'GitHub Actions', 'MySQL', 'PostgreSQL', 'SQLite', 'Firebase', 'Gemini API', 'pytest'],
      },
      {
        icon: 'study',
        title: 'Learning',
        tags: ['Spring', 'Docker', 'Jest'],
      },
    ],
  },
  about: {
    title: 'About',
    paragraphs: [
      'I started coding in a technical high school program at ETEC and moved on to Software Engineering at UMC. Today, at Populis, I work between business and code: I model HR and payroll processes in BPMN, turn them into workflows and build the screens people use.',
      'I like understanding systems end to end. That is why I have worked on front-end, back-end, mobile and testing, and CO2Bank is where I started working with AI. Infrastructure is the next area I want to explore.',
      'Outside work, I build tools to solve my own problems, like the practice quizzes I use to study for my university exams.',
    ],
    location: 'Itaquaquecetuba, São Paulo – Brazil',
    languages: 'Portuguese (native) · English (intermediate)',
  },
  contact: {
    title: 'Contact',
    lead: 'The fastest way to reach me is by email or LinkedIn.',
    gmail: 'Gmail',
  },
  caseStudy: {
    docTitle: 'CO2Bank · Case study · Sabrina Silva',
    badges: ['Live', 'University extension project · UMC 2026', 'Team of 5'],
    title: 'CO2Bank',
    subtitle: 'A smart wallet with an eco limit',
    intro:
      'Every card purchase shows the CO2 it generated, and an AI warns the user before they go over the monthly limit. Android app in Flutter with a Python and Flask API, published, with tests running on every update.',
    videoAria: 'CO2Bank app demo',
    links: {
      download: 'Download for Android',
      web: 'Open in the browser',
      code: 'App code',
      api: 'API docs',
    },
    problem: {
      title: 'The problem',
      text: 'Carbon footprint apps today depend on manual input and only show the impact after the purchase has happened. People who want to consume more consciously have no way to know, in the moment, how much each purchase weighs.',
    },
    solution: {
      title: 'The solution',
      features: [
        'The app connects to the bank through Open Finance and imports purchases from this month and the last six months.',
        'Each purchase shows its estimated CO2 based on the merchant category code (MCC).',
        'The user sets a monthly eco limit, with a suggestion based on the last three months.',
        'When the month passes 80% of the limit, an AI writes a personalized alert, on the home screen and as a notification.',
        'The "Before you buy" simulator shows the impact of a purchase before it happens.',
        'Saved CO2 becomes CO2Coins, which can be exchanged for coupons at partner stores.',
      ],
    },
    role: {
      title: 'My role',
      text: 'I was the Product Owner, systems analyst and a developer on a team of 5. I organized the backlog in Jira into epics (authentication, CO2 calculation, limit, AI alert, rewards and Open Finance), with Scrum sprints and a Kanban board, and built a large part of the Flask API and the Flutter app.',
    },
    decisions: {
      title: 'Technical decisions',
      items: [
        {
          title: 'AI with a plan B',
          text: 'Gemini writes the alert based on the categories that weighed the most that month. If the AI is slow or fails, the system sends a default message, so the alert never fails because of an external service.',
        },
        {
          title: 'Business rules only in the back-end',
          text: 'CO2 calculation, limit policy and rewards live in the API, in a layered architecture where the domain does not depend on Flask, the database or external APIs. The app only displays the data, and the rules are easy to test.',
        },
        {
          title: 'Face verification on the device',
          text: 'Google ML Kit checks the face live, offline: a single face, looking forward, no glasses, and a blink as proof it is not a photo. The image is resized before going to the server, and the original is deleted from the phone.',
        },
        {
          title: 'Automatic publishing',
          text: 'On every push, GitHub Actions runs the tests, builds the APK and the web version and publishes everything. A version file published alongside lets the app warn users when a new version is out.',
        },
      ],
    },
    architecture: {
      title: 'Architecture',
      text: 'The app talks to the API over HTTPS. The API is split into layers: interface (Flask routes), application (use cases) and domain (pure rules), with external integrations isolated in the infrastructure layer.',
      app: 'Flutter app (Android)',
      appItems: ['ML Kit · face verification', 'Device biometrics and PIN', 'Push notifications'],
      api: 'REST API in Flask',
      apiLayers: ['Interface · routes and validation', 'Application · use cases', 'Domain · CO2, limit and rewards'],
      database: 'PostgreSQL',
      services: [
        { name: 'Google Gemini', detail: 'AI alerts' },
        { name: 'Firebase Cloud Messaging', detail: 'push notifications' },
        { name: 'Open Finance', detail: 'simulated in the official format' },
        { name: 'Resend', detail: 'emails' },
      ],
      ci: 'GitHub Actions: tests, then the APK and website are published',
    },
    numbers: {
      title: 'By the numbers',
      items: [
        { value: '87', label: 'automated tests in the API' },
        { value: '5', label: 'people on the team' },
        { value: '12', label: 'purchase categories with a CO2 factor' },
        { value: '80%', label: 'of the limit triggers the AI alert' },
      ],
    },
    learnings: {
      title: 'What I learned',
      items: [
        'AI answers much better when it gets real user data, not a generic question.',
        'Every external service can fail. Having a plan B is what keeps the experience reliable.',
        'Keeping business rules apart from the AI and the interface makes the system easier to test and to change.',
      ],
    },
    next: {
      title: 'Next steps',
      items: [
        'Real Open Finance integration, currently simulated in the official API format.',
        'Replace the illustrative CO2 factors with an audited database, like the ones banks use.',
      ],
    },
    cta: {
      title: 'Want to talk about the project?',
      text: 'I can walk you through every decision.',
      button: 'Get in touch',
    },
  },
}
