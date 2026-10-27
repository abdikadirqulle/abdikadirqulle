import BlurFade from "@/components/magicui/blur-fade"
import { ProjectsGrid } from "@/components/projects-grid"
import { Badge } from "@/components/ui/badge"
import { DATA } from "@/data/resume"
import Image from "next/image"
import Link from "next/link"

const DELAY = 0.05

export default function Page() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="grid items-center gap-12 pb-16 pt-4 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:pb-24 md:pt-8">
        <BlurFade delay={DELAY}>
          <div className="space-y-6 md:space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3.5 py-1.5 text-sm text-emerald-800">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </div>

            <p className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase">
              {DATA.name}
            </p>

            <h1 className="font-display max-w-xl text-4xl leading-[1.12] font-medium tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.25rem]">
              Websites and systems that fit how organisations actually work.
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-neutral-500 sm:text-lg">
              I design and ship digital products for businesses and institutions
              — from public websites to the software that runs behind them.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="#projects"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                View my work
                <span aria-hidden="true">↓</span>
              </Link>
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex h-11 items-center rounded-xl border border-neutral-200 bg-white px-5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
              >
                Start a project
              </Link>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={DELAY * 2}>
          <div className="relative mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-neutral-200 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <Image
                src={DATA.avatarUrl}
                alt={DATA.name}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 38vw"
                className="object-cover object-[center_12%]"
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md sm:right-auto sm:min-w-[240px]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold tracking-tight text-neutral-950">
                    {DATA.name}
                  </p>
                  <p className="text-xs text-neutral-500">
                    Founder & engineer · {DATA.location}
                  </p>
                </div>
                <span className="size-2.5 shrink-0 rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Quick facts */}
      <section className="border-t border-neutral-200/80 py-10 md:py-12">
        <BlurFade delay={DELAY}>
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "10+", label: "Products & client builds" },
              { value: "3", label: "Companies founded" },
              { value: "2021", label: "Building since" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl tracking-tight text-neutral-300 sm:text-4xl md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-neutral-200/80 py-16 md:py-20"
      >
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

      {/* Experience */}
      <section
        id="experience"
        className="scroll-mt-24 border-t border-neutral-200/80 py-16 md:py-20"
      >
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
                  className="group flex gap-4 py-6 first:pt-0 last:pb-0 sm:gap-5"
                >
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white sm:size-14">
                    <Image
                      src={work.logoUrl}
                      alt={work.company}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <div>
                        <p className="text-lg font-medium tracking-tight text-neutral-950 transition group-hover:opacity-60">
                          {work.company}
                        </p>
                        <p className="text-sm text-neutral-500">{work.title}</p>
                      </div>
                      <p className="shrink-0 text-sm text-neutral-400">
                        {work.start} — {work.end ?? "Present"}
                      </p>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-500">
                      {work.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-t border-neutral-200/80 py-16 md:py-24"
      >
        <BlurFade delay={DELAY}>
          <div className="mb-12 max-w-xl md:mb-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-neutral-400 uppercase">
              Selected work
            </h2>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              Websites and systems for businesses, hotels, and institutions.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={DELAY}>
          <ProjectsGrid projects={DATA.projects} />
        </BlurFade>
      </section>

      {/* Skills */}
      <section className="border-t border-neutral-200/80 py-16 md:py-20">
        <BlurFade delay={DELAY}>
          <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-neutral-400 uppercase">
              Skills
            </h2>
            <div className="space-y-8">
              {(
                [
                  ["Development", DATA.skills.development],
                  ["DevOps", DATA.skills.devops],
                  ["Soft skills", DATA.skills.soft],
                ] as const
              ).map(([label, items]) => (
                <div key={label}>
                  <p className="mb-3 text-xs font-medium tracking-wide text-neutral-400 uppercase">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-normal text-neutral-700 shadow-none"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex h-11 items-center rounded-full bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                {DATA.contact.email}
              </Link>
              <p className="text-sm text-neutral-500">
                or{" "}
                <a
                  href="mailto:hello@abdikadirqulle.com"
                  className="font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                >
                  hello@abdikadirqulle.com
                </a>
              </p>
              <div className="flex w-full gap-4 text-sm text-neutral-500">
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

    </main>
  )
}
