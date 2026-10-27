import BlurFade from "@/components/magicui/blur-fade"
import { ProjectCard } from "@/components/project-card"
import { DATA } from "@/data/resume"
import Image from "next/image"
import Link from "next/link"

const DELAY = 0.05

export default function Page() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="grid items-center gap-10 pb-20 pt-4 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:pb-28 md:pt-8">
        <BlurFade delay={DELAY}>
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-[0.18em] text-neutral-400 uppercase">
              {DATA.location}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {DATA.name}
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-neutral-500 sm:text-xl">
              {DATA.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex h-11 items-center rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Start a project
              </Link>
              <Link
                href="#projects"
                className="inline-flex h-11 items-center rounded-full border border-neutral-200 bg-white px-6 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
              >
                View work
              </Link>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={DELAY * 2}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-neutral-200 shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:mx-0 md:max-w-none">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 42vw"
              className="object-cover object-top"
            />
          </div>
        </BlurFade>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 border-t border-neutral-200/80 py-16 md:py-20">
        <BlurFade delay={DELAY}>
          <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-neutral-400 uppercase">
              About
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl md:leading-relaxed">
              {DATA.summary}
            </p>
          </div>
        </BlurFade>
      </section>

      {/* Work */}
      <section id="experience" className="scroll-mt-24 border-t border-neutral-200/80 py-16 md:py-20">
        <BlurFade delay={DELAY}>
          <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-neutral-400 uppercase">
              Experience
            </h2>
            <div className="space-y-0 divide-y divide-neutral-200/80">
              {DATA.work.map((work) => (
                <Link
                  key={work.company}
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 py-6 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <div>
                    <p className="text-lg font-medium tracking-tight text-neutral-950 transition group-hover:opacity-60">
                      {work.company}
                    </p>
                    <p className="text-sm text-neutral-500">{work.title}</p>
                  </div>
                  <p className="shrink-0 text-sm text-neutral-400">
                    {work.start} — {work.end ?? "Present"}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Projects — staggered */}
      <section id="projects" className="scroll-mt-24 border-t border-neutral-200/80 py-16 md:py-24">
        <BlurFade delay={DELAY}>
          <div className="mb-14 max-w-xl md:mb-20">
            <h2 className="text-sm font-medium tracking-[0.18em] text-neutral-400 uppercase">
              Selected work
            </h2>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              Websites and systems for businesses, hotels, and institutions.
            </p>
          </div>
        </BlurFade>

        <div className="flex flex-col gap-16 md:gap-24">
          {DATA.projects.map((project, id) => (
            <BlurFade key={project.title} delay={DELAY + id * 0.04}>
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                image={project.image}
                links={project.links}
                align={id % 2 === 0 ? "left" : "right"}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-neutral-200/80 py-16 md:py-20">
        <BlurFade delay={DELAY}>
          <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-neutral-400 uppercase">
              Skills
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              {DATA.skills.join("  ·  ")}
            </p>
          </div>
        </BlurFade>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-neutral-200/80 py-16 md:py-24"
      >
        <BlurFade delay={DELAY}>
          <div className="max-w-2xl space-y-6">
            <h2 className="text-sm font-medium tracking-[0.18em] text-neutral-400 uppercase">
              Contact
            </h2>
            <p className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Let&apos;s build something.
            </p>
            <p className="text-lg text-neutral-500">
              A new website, software for your team, or something you&apos;re
              still working out.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex h-11 items-center rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                {DATA.contact.email}
              </Link>
              <div className="flex gap-4 text-sm text-neutral-500">
                <Link
                  href={DATA.contact.social.GitHub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950"
                >
                  GitHub
                </Link>
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950"
                >
                  LinkedIn
                </Link>
                <Link
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950"
                >
                  X
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <footer className="border-t border-neutral-200/80 pt-8 text-sm text-neutral-400">
        © {new Date().getFullYear()} {DATA.name}
      </footer>
    </main>
  )
}
