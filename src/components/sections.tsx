import Image from "next/image";
import {
  certifications,
  education,
  jobs,
  profile,
  projects,
  skillGroups,
  stats,
} from "@/lib/data";
import { CopyEmail } from "./CopyEmail";
import { Reveal } from "./Reveal";
import { StickerBoard } from "./StickerBoard";
import { Mark, SectionHeading, Tag, pastelBg, pastelStrong } from "./ui";

const btnPrimary =
  "inline-flex items-center gap-2 rounded-2xl border-2 border-line bg-ink px-6 py-3.5 font-display font-bold text-paper shadow-[4px_4px_0_var(--color-coral)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-coral)]";
const btnSecondary =
  "inline-flex items-center gap-2 rounded-2xl border-2 border-line bg-paper px-6 py-3.5 font-display font-bold shadow-[4px_4px_0_var(--line)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--line)]";

/* ------------------------------------------------------------------ HERO */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* floating 3D spheres */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-bob absolute top-24 -right-16 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffe3d6,#ff9f87_60%,#f07a63)] shadow-[0_40px_60px_#f07a6333] sm:right-[6%] sm:h-64 sm:w-64" />
        <div className="animate-bob absolute top-[420px] right-[30%] hidden h-32 w-32 rounded-full bg-[radial-gradient(circle_at_30%_30%,#efe6ff,#b9a3ff_60%,#9277f0)] shadow-[0_30px_40px_#9277f033] [animation-delay:-2s] lg:block" />
        <div className="animate-bob absolute top-40 left-[52%] hidden h-20 w-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,#e2fdef,#8ee6bd_60%,#5fcf9d)] shadow-[0_20px_30px_#5fcf9d33] [animation-delay:-4s] sm:block" />
        <div className="animate-bob absolute bottom-24 left-[-30px] h-24 w-24 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff6d6,#ffcf5c_60%,#f0b43a)] shadow-[0_20px_30px_#f0b43a33] [animation-delay:-3s] sm:left-[3%]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <span className="inline-block -rotate-2 rounded-2xl border-2 border-line bg-paper px-4 py-2 font-display font-semibold shadow-[4px_4px_0_var(--line)]">
            👋 Hi, I&apos;m {profile.name}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl font-display text-[clamp(44px,9vw,108px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
            I build things for the web that people <Mark>love</Mark> using.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.role} with {profile.years} years building customer-facing products in React, Next.js
            and TypeScript. Most recently, I built the AI image-generation experience at Modelia.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={profile.resume} download className={btnPrimary}>
              Download resume ↓
            </a>
            <a href="#work" className={btnSecondary}>
              See my work →
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-3 sm:gap-5">
            {stats.map((s) => (
              <div key={s.label} className="pop rounded-2xl bg-paper p-4 sm:p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ PLAYGROUND */
export function Playground() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <Reveal>
        <StickerBoard />
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------- ABOUT */
export function About() {
  const facts = [
    { k: "Based in", v: profile.location, e: "📍", c: "bg-peach" },
    { k: "Experience", v: `${profile.years} years`, e: "💼", c: "bg-lilac" },
    { k: "Availability", v: "Can join immediately", e: "🚀", c: "bg-mint" },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="About me">
          From Figma to <Mark color="bg-lilac-strong">shipped.</Mark>
        </SectionHeading>
      </Reveal>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <Reveal delay={80}>
          <div className="space-y-5 text-lg leading-relaxed sm:text-xl">
            <p>
              I&apos;m a frontend engineer who loves turning designs into fast, polished products. Most
              recently I owned <strong>15+ production features</strong> for an AI-powered fashion platform at
              Modelia, from the image-generation flow to the customer dashboard and onboarding.
            </p>
            <p className="text-muted">
              I care about reusable component architecture, responsive and cross-browser UI, and catching bugs
              before users ever see them. I also work across the stack: I designed, built and deployed a React,
              Node.js and PostgreSQL application with authentication, role-based access control and an approval
              workflow.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-4">
          {facts.map((f, i) => (
            <Reveal key={f.k} delay={120 + i * 80}>
              <div className={`pop-plum flex items-center gap-4 rounded-2xl p-5 text-plum ${f.c}`}>
                <span className="text-3xl" aria-hidden>{f.e}</span>
                <div>
                  <div className="text-sm font-semibold opacity-70">{f.k}</div>
                  <div className="font-display text-xl font-bold">{f.v}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ EXPERIENCE */
export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Experience">
          Where I&apos;ve <Mark color="bg-peach-strong">shipped.</Mark>
        </SectionHeading>
      </Reveal>

      <ol className="relative space-y-8 border-l-2 border-dashed border-line pl-6 sm:space-y-10 sm:pl-10">
        {jobs.map((job, i) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden
              className={`absolute top-6 -left-[39px] grid h-8 w-8 place-items-center rounded-full border-2 border-plum text-base sm:-left-[57px] sm:h-10 sm:w-10 ${pastelStrong[job.color]}`}
            >
              {job.emoji}
            </span>
            <Reveal delay={i * 60}>
              <article className={`pop-plum rounded-[26px] p-6 text-plum transition-transform duration-300 hover:-rotate-[0.6deg] sm:p-8 ${pastelBg[job.color]}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{job.company}</h3>
                  <span className="text-sm font-semibold opacity-70">{job.period}</span>
                </div>
                <p className="mt-1 font-display text-lg font-semibold">{job.role}</p>
                <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed sm:text-base">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span aria-hidden className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-plum" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* -------------------------------------------------------------- PROJECTS */
export function Work() {
  const p = projects[0];
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Selected work">
          Things I&apos;ve <Mark color="bg-mint-strong">built.</Mark>
        </SectionHeading>
      </Reveal>

      <Reveal>
        <article className={`pop-plum grid overflow-hidden rounded-[30px] text-plum lg:grid-cols-[1.15fr_1fr] ${pastelBg[p.color]}`}>
          <div className="relative flex items-center border-b-2 border-plum bg-[linear-gradient(135deg,#b9a3ff,#9fd8ff)] p-5 sm:p-8 lg:border-r-2 lg:border-b-0">
            <div className="overflow-hidden rounded-2xl border-2 border-plum bg-white shadow-[5px_5px_0_#2a2235] transition-transform duration-500 hover:-rotate-1 hover:scale-[1.02]">
              <div className="flex items-center gap-1.5 border-b-2 border-plum bg-paper px-3 py-2">
                <span className="h-3 w-3 rounded-full border-[1.5px] border-plum bg-peach-strong" />
                <span className="h-3 w-3 rounded-full border-[1.5px] border-plum bg-sun-strong" />
                <span className="h-3 w-3 rounded-full border-[1.5px] border-plum bg-mint-strong" />
                <span className="ml-2 truncate text-xs font-medium text-muted">compliance-tracker-wheat.vercel.app</span>
              </div>
              <Image src={p.image} alt="Compliance Tracker app screenshot" width={1440} height={900} className="h-auto w-full" />
            </div>
          </div>
          <div className="flex flex-col p-6 sm:p-9">
            <span className="text-sm font-semibold opacity-70">{p.kind}</span>
            <h3 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{p.title}</h3>
            <p className="mt-3 leading-relaxed">{p.blurb}</p>
            <ul className="mt-5 space-y-3 text-[15px] leading-snug">
              {p.points.map((pt) => (
                <li key={pt} className="border-l-4 border-plum/80 pl-3">{pt}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={p.live} target="_blank" rel="noreferrer" className="rounded-2xl border-2 border-plum bg-plum px-5 py-3 font-display font-bold text-white shadow-[4px_4px_0_var(--color-coral)] transition-transform hover:-translate-y-0.5">
                Live demo ↗
              </a>
              <a href={p.code} target="_blank" rel="noreferrer" className="rounded-2xl border-2 border-plum bg-white px-5 py-3 font-display font-bold shadow-[4px_4px_0_#2a2235] transition-transform hover:-translate-y-0.5">
                View code ↗
              </a>
            </div>
          </div>
        </article>
      </Reveal>

    </section>
  );
}

/* ---------------------------------------------------------------- SKILLS */
export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Skills">
          My <Mark>toolkit.</Mark>
        </SectionHeading>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 60} className={i === skillGroups.length - 1 ? "md:col-span-2" : ""}>
            <div className={`pop-plum h-full rounded-[24px] p-6 text-plum ${pastelBg[g.color]}`}>
              <h3 className="font-display text-xl font-extrabold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- EDUCATION */
export function Education() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Education">
          Always <Mark color="bg-sky-strong">learning.</Mark>
        </SectionHeading>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="pop-lg h-full rounded-[24px] bg-paper p-7">
            <span className="text-4xl" aria-hidden>🎓</span>
            <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">{education.degree}</h3>
            <p className="mt-2 text-muted">{education.school}</p>
            <p className="mt-1 text-muted">
              {education.period} · {education.gpa}
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="pop-lg h-full rounded-[24px] bg-paper p-7">
            <span className="text-4xl" aria-hidden>📜</span>
            <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">Certifications</h3>
            <ul className="mt-3 space-y-2">
              {certifications.map((c) => (
                <li key={c.name} className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-semibold">{c.name}</span>
                  {c.issuer && <span className="text-sm text-muted">· {c.issuer}</span>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- CONTACT */
export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pb-24">
      <Reveal>
        <div className="pop-plum relative overflow-hidden rounded-[36px] bg-sun-strong p-8 text-plum sm:p-14">
          <div aria-hidden className="animate-bob absolute -top-10 -right-10 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffe3d6,#ff9f87_60%,#f07a63)] opacity-90 sm:h-60 sm:w-60" />
          <div className="relative">
            <span className="inline-block -rotate-2 rounded-xl border-2 border-plum bg-white px-3 py-1 font-display text-sm font-semibold shadow-[3px_3px_0_#2a2235]">
              Contact
            </span>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(40px,7vw,84px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              Let&apos;s build something people love.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">
              I&apos;m available to join immediately. The quickest way to reach me is email: click to copy it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CopyEmail />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: profile.linkedin, label: "LinkedIn ↗", ext: true },
                { href: profile.github, label: "GitHub ↗", ext: true },
                { href: profile.resume, label: "Resume (PDF) ↓", ext: false },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.ext ? { target: "_blank", rel: "noreferrer" } : { download: true })}
                  className="rounded-2xl border-2 border-plum bg-plum px-5 py-3 font-display font-bold text-white shadow-[4px_4px_0_#fff] transition-transform hover:-translate-y-0.5"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t-2 border-line px-4 py-8 text-sm text-muted sm:px-6">
      <span>© 2026 {profile.name}</span>
      <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
    </footer>
  );
}
