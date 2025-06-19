export const projects = [
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
    link: "https://github.com/yarkhan706/final-project-academ-ease"
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
    link: "https://github.com/yarkhan706/nubex-cloud-scape"
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
    link: "https://github.com/yarkhan706/ayk-store"
  }
  
  ];
  