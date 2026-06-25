import Image from "next/image";

function GridOverlay() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 hidden md:grid grid-cols-12 gap-6 border-r border-[var(--grid-line)] z-0 pointer-events-none"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="border-l border-[var(--grid-line)]" />
      ))}
    </div>
  );
}

function SectionMarker({ letter, label }: { letter: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2.5 border-t border-[var(--ink)] pt-3 mb-3.5">
      <span className="text-[11px] font-bold text-[var(--accent)]">{letter}</span>
      <span className="text-[11px] tracking-[0.14em] uppercase text-[var(--muted)]">
        {label}
      </span>
    </div>
  );
}

function Row({
  date,
  children,
  last,
}: {
  date: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[100px_1fr] md:grid-cols-[110px_1fr] gap-[18px] py-3.5 ${
        last ? "" : "border-b border-[var(--line-soft)]"
      }`}
    >
      <span className="text-xs text-[var(--muted)]">{date}</span>
      <span className="text-[15px] text-[var(--ink-soft)]">{children}</span>
    </div>
  );
}

const CONTACT = [
  { href: "mailto:asfandyarkhan.dev@gmail.com", label: "asfandyarkhan.dev@gmail.com" },
  { href: "https://www.linkedin.com/in/yarkhan706", label: "linkedin.com/in/yarkhan706 →" },
  { href: "https://www.github.com/yarkhan706", label: "github.com/yarkhan706 →" },
];

export default function AboutMe() {
  return (
    <main className="relative max-w-[1440px] mx-auto px-6 md:px-10">
      <GridOverlay />
      <div className="relative z-[1] pf-page">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 items-end pt-[52px] pb-7">
          <h1 className="col-span-12 md:col-span-9 m-0 font-bold text-[clamp(30px,4.4vw,60px)] leading-[1.04] tracking-[-0.025em]">
            Creating digital solutions that embrace simplicity.
          </h1>
          <div className="col-span-12 md:col-span-3 md:pb-2 text-[11px] tracking-[0.12em] uppercase text-[var(--muted)]">
            About — 2026
          </div>
        </div>

        <div className="border-t-2 border-[var(--ink)]" />

        {/* Body */}
        <div className="grid grid-cols-12 gap-6 py-11 pb-[60px]">
          {/* Text column */}
          <div className="col-span-12 md:col-span-7">
            <p className="m-0 mb-5 text-base leading-[1.6] text-[var(--ink-soft)] max-w-[60ch]">
              Asfand Yar Khan is a Computer Science graduate and full-stack
              engineer based in Attock, Pakistan. With a passion for clean,
              minimal design inspired by Japanese aesthetics, he focuses on
              creating digital solutions that prioritize simplicity and
              functionality.
            </p>
            <p className="m-0 mb-[52px] text-base leading-[1.6] text-[var(--ink-soft)] max-w-[60ch]">
              His work spans real-time AI coaching, cognitive-science-driven team
              intelligence, and a SaaS academic productivity suite — each one
              combining modern React and TypeScript stacks with practical AI
              integration, built to feel simple and genuinely useful.
            </p>

            {/* Contact */}
            <SectionMarker letter="A" label="Contact" />
            <div className="flex flex-col gap-2 mb-12">
              {CONTACT.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[15px] text-[var(--ink)] no-underline hover:text-[var(--accent)] transition-colors w-fit"
                >
                  {c.label}
                </a>
              ))}
            </div>

            {/* Experience */}
            <SectionMarker letter="B" label="Experience" />
            <div className="mb-12">
              <Row date="2026 — Present">
                Full-Stack Engineer ·{" "}
                <a
                  href="https://www.brainboxautomations.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[var(--ink)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                >
                  Brainbox Automations
                </a>{" "}
                — Maxiom, MindTime AI
              </Row>
              <Row date="2021 — 2025" last>
                Freelance Web Developer during studies
              </Row>
            </div>

            {/* Education */}
            <SectionMarker letter="C" label="Education" />
            <div>
              <Row date="2021 — 2025">
                Bachelor in Computer Science · COMSATS University Islamabad,
                Attock Campus
              </Row>
              <Row date="2020 — 2021">
                Intermediate in Computer Science · Fazaia College ARF, Kamra
              </Row>
              <Row date="2018 — 2019" last>
                Matriculation · Asma Private School
              </Row>
            </div>
          </div>

          {/* Portrait column */}
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="md:sticky md:top-[120px]">
              <div className="aspect-[3/4] bg-[var(--slot)] overflow-hidden mb-3.5">
                <Image
                  src="/images/profile.jpeg"
                  alt="Asfand Yar Khan"
                  width={480}
                  height={640}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="text-[11px] tracking-[0.1em] uppercase text-[var(--muted)] leading-[1.7]">
                Asfand Yar Khan
                <br />
                Full-Stack Engineer
                <br />
                Attock, Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
