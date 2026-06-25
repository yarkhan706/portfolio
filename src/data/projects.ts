export const projects = [
  {
    name: "Maxiom",
    description: `
    <h2 class="text-xl font-bold mb-2">Maxiom: AI-Powered Fitness & Health Coaching Platform</h2>
    <p class="text-gray-700 mb-4">
      Maxiom ("Live optimized.") is an AI fitness and health partner that pairs an intelligent coach, Max, with cutting-edge science and expert human insight. It delivers hyper-personalized guidance for workouts, nutrition, and recovery built around each user's unique biology, goals, and daily data—continuously learning and refining its advice over time.
    </p>
    <ul class="list-disc list-inside space-y-2 text-gray-700">
      <li><span class="font-semibold">Conversational AI Coach:</span> Real-time voice and chat coaching powered by OpenAI's realtime agents for friendly, science-backed guidance.</li>
      <li><span class="font-semibold">Wearable Integration:</span> Terra API connects fitness trackers and health devices to feed live biometric data into personalized recommendations.</li>
      <li><span class="font-semibold">Hyper-Personalization:</span> Tailors plans to a user's body, goals, and routine, adapting as new data arrives—no judgment, ever.</li>
      <li><span class="font-semibold">Guided Onboarding:</span> A 90-second setup with onboarding surveys and a tutorial wizard to get users coaching fast.</li>
      <li><span class="font-semibold">AWS Backend:</span> Built on AWS Amplify with DataStore, DynamoDB, and S3 for scalable, real-time data and media handling.</li>
      <li><span class="font-semibold">Payments:</span> Stripe checkout and subscription management for freemium-to-paid flows.</li>
      <li><span class="font-semibold">Analytics & Consent:</span> PostHog product analytics with a consent-aware tracking layer for privacy compliance.</li>
      <li><span class="font-semibold">Modern Stack:</span> React, Vite, Tailwind CSS, and Radix UI for a fast, polished, fully responsive experience.</li>
    </ul>
    <p class="mt-4 text-gray-700">
      Maxiom blends advanced AI with personalized human coaching to become not just a tool, but a partner in your journey toward health and fitness excellence.
      <br />
      <a href="https://www.maxiom.io/" target="_blank" class="text-blue-600 hover:underline" rel="noopener noreferrer">
        Explore Maxiom
      </a>
    </p>
    `,
    stack: ["React", "Vite", "AWS Amplify", "DynamoDB", "Amazon S3", "OpenAI", "Terra API", "Stripe", "Tailwind CSS"],
    cover: "/images/maxiom.png",
    screenshots: [
      "/images/maxiom.png",
    ],
    link: "https://www.maxiom.io/",
    year: "2026",
    featured: true,
    tagline: "An AI fitness and health coaching platform — a real-time voice coach, wearable data, and hyper-personalized guidance for workouts, nutrition, and recovery.",
    category: "AI · Health · SaaS",
    tags: ["AI Coaching", "AWS", "React"],
    role: "Full-Stack Engineer",
    kicker: "AI health coaching, personalized."
  },
  {
    name: "MindTime AI",
    description: `
    <h2 class="text-xl font-bold mb-2">MindTime AI: Team Intelligence Built on How You Think</h2>
    <p class="text-gray-700 mb-4">
      MindTime AI turns the science of how people think into a self-serve Team Intelligence platform. Grounded in MindTime's cognitive framework—"How you think is your gift"—it builds individual and team cognitive profiles, then weaves them into an AI assistant, Clara, that understands the context of each person and team.
    </p>
    <ul class="list-disc list-inside space-y-2 text-gray-700">
      <li><span class="font-semibold">Self-Serve Experience:</span> Users sign up independently, build a team, pass through a paywall, and manage members—all without admin involvement, running alongside the existing enterprise platform.</li>
      <li><span class="font-semibold">Clara AI Assistant:</span> A context-aware chat assistant built on the Vercel AI SDK that draws on cognitive maps, reports, and team data to give grounded, personalized responses.</li>
      <li><span class="font-semibold">Cognitive Maps & Reports:</span> Surveys feed a thinking-style engine that renders individual cognitive maps and comparison reports for teams.</li>
      <li><span class="font-semibold">Supabase Backend:</span> PostgreSQL with edge functions, auth, and generated types for a type-safe, scalable data layer.</li>
      <li><span class="font-semibold">Permission & State Management:</span> Five distinct user states (personal, comparison, trial leader, paid leader, member), each with consistently enforced access and feature gating.</li>
      <li><span class="font-semibold">Trial Wall & Stripe Payments:</span> A soft upgrade gate with Stripe checkout, webhooks, and an invoice path keep subscription state in sync.</li>
      <li><span class="font-semibold">Embeddable Plugin:</span> A lightweight UMD widget lets the cognitive surface be embedded in external sites.</li>
      <li><span class="font-semibold">Modern Stack:</span> React, TypeScript, Vite, Tailwind CSS, and Radix UI with Sentry monitoring and PostHog analytics.</li>
    </ul>
    <p class="mt-4 text-gray-700">
      MindTime AI takes a person's unique way of thinking and builds it directly into their AI—turning cognitive science into practical team intelligence.
      <br />
      <a href="https://mindtime.com/" target="_blank" class="text-blue-600 hover:underline" rel="noopener noreferrer">
        Explore MindTime
      </a>
    </p>
    `,
    stack: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Vercel AI SDK", "Stripe", "Tailwind CSS"],
    cover: "/images/mindtime.png",
    screenshots: [
      "/images/mindtime.png",
    ],
    link: "https://mindtime.com/",
    year: "2026",
    featured: false,
    tagline: "Self-serve Team Intelligence that turns cognitive science into a context-aware AI assistant.",
    category: "AI · Teams · SaaS",
    tags: ["AI", "Supabase", "TypeScript"],
    role: "Full-Stack Engineer",
    kicker: "Team intelligence from how you think."
  },
  {
    name: "AcademeEase",
    description: `
  <h2 class="text-xl font-bold mb-2">AcademeEase: An AI-powered academic productivity platform</h2>
  <p class="text-gray-700 mb-4">
    AcademeEase is an AI-powered academic productivity platform that I built as my final-year project to help students manage their studies more efficiently. It blends modern design with intelligent features to simplify academic life.
  </p>
  <ul class="list-disc list-inside space-y-2 text-gray-700">
    <li><span class="font-semibold">Prototype Design:</span> Designed in Figma to create a clean, minimal UI that prioritizes simplicity and ease of use.</li>
    <li><span class="font-semibold">Next.js Framework:</span> Chosen for its server-side rendering, scalability, and seamless integration with modern web technologies.</li>
    <li><span class="font-semibold">Tailwind CSS:</span> Used for consistent and elegant styling that aligns with Japanese design principles—clean lines and subtle details.</li>
    <li><span class="font-semibold">Prisma ORM & PostgreSQL:</span> A robust, maintainable database layer that ensures data consistency and easy querying.</li>
    <li><span class="font-semibold">AI-Integrated Rich Text Editor:</span> Powered by the ChatGPT API, enabling students to generate and refine notes with smart suggestions.</li>
    <li><span class="font-semibold">Kanban Task Management:</span> Visual task organization with nested subtasks for detailed planning.</li>
    <li><span class="font-semibold">Pomodoro Timer:</span> Integrated to help students manage focus and maintain productivity.</li>
    <li><span class="font-semibold">Interactive Dashboard:</span> Offers insights into progress and productivity trends.</li>
    <li><span class="font-semibold">Security:</span> Implemented OAuth 2.0 and AES-256 encryption to ensure user data safety and privacy.</li>
    <li><span class="font-semibold">Hosting:</span> Deployed on Vercel for fast and scalable deployment.</li>
  </ul>
  <p class="mt-4 text-gray-700">
    AcademeEase embodies my commitment to combining simplicity, elegance, and functionality to create meaningful digital experiences for students.
    <br />
    <a href="https://academe-ease.vercel.app/" target="_blank" class="text-blue-600 hover:underline" rel="noopener noreferrer">
      Try it out!
    </a>
  </p>
`,
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma ORM", "Shadcn", "PostgreSQL"],
    cover: "/images/cover_ae.png",
    screenshots: [
      "/images/MU_dashboard.png",
      "/images/MU_NOTES.png",
      "/images/MU_POMO.png",
      "/images/ae_dashboard.png",
      "/images/ae_editor.png",
      "/images/ae_kanban.png",
      "/images/ae_pomodoro.png",
    ],
    link: "https://github.com/yarkhan706/final-project-academ-ease",
    year: "2025",
    featured: false,
    tagline: "A full SaaS academic productivity tool — task management, study notes, a Pomodoro timer and an AI assistant in one calm workspace.",
    category: "SaaS · AI · Next.js",
    tags: ["SaaS", "AI Prompting", "Next.js"],
    role: "Final Year Project",
    kicker: "Academic productivity, simplified."
  },
  {
    name: "NUBEX CLOUD",
    description: `
      <h2 class="text-xl font-bold mb-2">NUBEX CLOUD: A balanced UI/UX website for a leading Cloud Service Provider</h2>
      <p class="text-gray-700 mb-4">
        NUBEX CLOUD is a clean and thoughtfully structured website designed to showcase NUBEX’s comprehensive cloud services. 
        It balances visual appeal with intuitive navigation, emphasizing clarity and simplicity to engage prospective customers effectively.
      </p>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li><span class="font-semibold">Structured Layout:</span> Organized homepage with hero banner, service overview, testimonials, case studies, and clear CTAs.</li>
        <li><span class="font-semibold">Cloud Services:</span> Covers Public, Private, Hybrid clouds, plus IaaS, PaaS, SaaS, AI, and Edge computing offerings.</li>
        <li><span class="font-semibold">User Experience:</span> Prioritizes responsive design and logical information flow for easy exploration on all devices.</li>
        <li><span class="font-semibold">Brand Consistency:</span> Uses consistent colors, typography, and iconography to reinforce brand identity and trust.</li>
        <li><span class="font-semibold">Engaging Visuals:</span> Incorporates icons, infographics, and images that reflect professionalism and subtle elegance.</li>
        <li><span class="font-semibold">Customer Focus:</span> Highlights key benefits like scalability, security, 24/7 support, and tailored industry solutions.</li>
        <li><span class="font-semibold">Additional Features:</span> Includes blog/resource section, contact information, and promotional offers to support business growth.</li>
      </ul>
      <p class="mt-4 text-gray-700">
        The site embodies simplicity, harmony, and functional beauty, presenting complex cloud services with clarity and refinement.  
        <br />
        <a href="https://nubex-cloud-scape.netlify.app/" target="_blank" class="text-blue-600 hover:underline" rel="noopener noreferrer">
          Explore NUBEX CLOUD
        </a>
      </p>
    `,
    stack: ["React", "Tailwind CSS", "Netlify"],
    cover: "/images/nu_1.png",
    screenshots: [
      "/images/nu_1.png",
      "/images/nu_2.png",
      "/images/nu_3.png",
      "/images/nu_4.png",
      "/images/nu_5.png",
    ],
    link: "https://github.com/yarkhan706/nubex-cloud-scape",
    year: "2024",
    featured: false,
    tagline: "Marketing site for a cloud services company — built to convert and scale.",
    category: "Landing · Web · Brand",
    tags: ["React", "Landing", "Brand"],
    role: "Design & Build",
    kicker: "Cloud infrastructure that scales."
  },
  {
    name: "Ayk Store",
    description: `
    <h2 class="text-xl font-bold mb-2">Ayk Store: A Modern E-commerce Platform with React, Firebase & SCSS</h2>
    <p class="text-gray-700 mb-4">
      Ayk Store is a clean, responsive e-commerce platform built with React and Firebase, styled using SCSS for modular and maintainable design. It aims to offer a smooth, elegant shopping experience.
    </p>
    <ul class="list-disc list-inside space-y-2 text-gray-700">
      <li><span class="font-semibold">React Frontend:</span> Fast and dynamic user interface built with React.</li>
      <li><span class="font-semibold">Firebase Backend:</span> Firestore database and Authentication for real-time data and secure login.</li>
      <li><span class="font-semibold">SCSS Styling:</span> Modular, scalable styles that align with minimalist design principles.</li>
      <li><span class="font-semibold">Product & Cart Management:</span> Smooth product listing, search, cart, and checkout flow.</li>
      <li><span class="font-semibold">Deployment Ready:</span> Can be deployed seamlessly on Firebase Hosting.</li>
    </ul>
    <p class="mt-4 text-gray-700">
      Ayk Store embraces simplicity and functionality, crafted for clarity and ease of use.
      <br />
      <a href="https://github.com/yarkhan706/ayk-store" target="_blank" class="text-blue-600 hover:underline" rel="noopener noreferrer">
        Explore the source code on GitHub
      </a>
    </p>
    `,
    stack: ["React", "Firebase Firestore", "Firebase Authentication", "Firebase Hosting", "SCSS"],
    cover: "/images/ak1.png",
    screenshots: [
      "/images/ak2.png",
      "/images/ak3.png",
      "/images/ak4.png",
    ],
    link: "https://github.com/yarkhan706/ayk-store",
    year: "2024",
    featured: false,
    tagline: "A headwear e-commerce storefront with a clean catalog and cart flow.",
    category: "E-commerce · Storefront · UI",
    tags: ["React", "Firebase", "SCSS"],
    role: "Frontend",
    kicker: "A modern e-commerce storefront."
  },
  {
    name: "BotDrop",
    description: `
    <h2 class="text-xl font-bold mb-2">BotDrop: AI Chatbot Builder with Embeddable Widget</h2>
    <p class="text-gray-700 mb-4">
      BotDrop is a minimal, embeddable AI chatbot platform that allows users to create, configure, and deploy conversational assistants in seconds. Designed for simplicity and elegance, it helps developers and creators embed intelligent chat interfaces on any site with just one line of code.
    </p>
    <ul class="list-disc list-inside space-y-2 text-gray-700">
      <li><span class="font-semibold">Visual Bot Builder:</span> User-friendly UI to create and edit chatbot personality and responses.</li>
      <li><span class="font-semibold">Embed Anywhere:</span> Generates a lightweight <code>&lt;script&gt;</code> snippet to drop into any website—no setup required.</li>
      <li><span class="font-semibold">Authentication:</span> Supabase Auth (OAuth via Google) for secure, personalized access.</li>
      <li><span class="font-semibold">Data Layer:</span> Prisma ORM with PostgreSQL ensures scalable and clean data management.</li>
      <li><span class="font-semibold">OpenAI Integration:</span> Powered by GPT-4 for contextual, human-like chat responses.</li>
      <li><span class="font-semibold">Modern Stack:</span> Built with Next.js App Router, Tailwind CSS, and shadcn/ui for speed and clean design.</li>
      <li><span class="font-semibold">Live Preview:</span> Instantly preview your bot while editing its configuration.</li>
      <li><span class="font-semibold">Fully Responsive:</span> Optimized for mobile and desktop devices.</li>
      <li><span class="font-semibold">Hosted on Vercel:</span> Leveraging serverless deployment for performance and scalability.</li>
    </ul>
    <p class="mt-4 text-gray-700">
      BotDrop reflects my love for tools that combine intelligent features, minimal design, and developer convenience.
      <br />
      <a href="https://botdrop.vercel.app/" target="_blank" class="text-blue-600 hover:underline" rel="noopener noreferrer">
        Try BotDrop Live
      </a>
    </p>
    `,
    stack: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Prisma ORM", "OpenAI", "TypeScript"],
    cover: "/images/chatbot.png",
    screenshots: [
      "/images/chatbot.png",
      "/images/cbd.png",
      "/images/chex.png",
    ],
    link: "https://github.com/yarkhan706/botdrop",
    year: "2025",
    featured: false,
    tagline: "Build and embed smart AI chatbots on any site — instantly, with custom prompts.",
    category: "AI · SaaS · Widget",
    tags: ["AI", "Next.js", "Supabase"],
    role: "Full-Stack",
    kicker: "Embeddable AI chatbots."
  }

  ];
  