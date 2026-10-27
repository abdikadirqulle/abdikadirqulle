import BlurFade from "@/components/magicui/blur-fade"
import { ProjectsGrid } from "@/components/projects-grid"
import { Badge } from "@/components/ui/badge"
import { EDUCATION } from "@/data/education"
import { PERSON } from "@/data/person"
import { PUBLIC_PORTFOLIO } from "@/data/portfolios/public"
import { projectsFor, workFor } from "@/lib/portfolio-data"
import Image from "next/image"
import Link from "next/link"

const DELAY = 0.05

export default function PublicPage() {
  const work = workFor("public")
  const projects = projectsFor("public")

  return (
    <main className="flex flex-col">
      <p className="mb-8 rounded-md border border-slate-800/10 bg-[#efeae2]/80 px-4 py-3 text-sm leading-relaxed text-slate-600">
        Personal professional portfolio — not an official government website, and
        not an endorsement by any institution.
      </p>

      <section className="grid items-center gap-12 pb-16 pt-2 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:pb-24">
        <BlurFade delay={DELAY}>
          <div className="space-y-5 md:space-y-6">
            <p className="font-[family-name:var(--font-public-serif)] text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {PERSON.name}
            </p>
            <h1 className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-tight text-slate-800 sm:text-4xl lg:text-[2.75rem]">
              {PUBLIC_PORTFOLIO.headline}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              {PUBLIC_PORTFOLIO.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href={`mailto:${PERSON.contact.email}`}
                className="inline-flex h-11 items-center rounded-md bg-slate-900 px-5 text-sm font-medium text-[#f7f5f0] transition hover:bg-slate-800"
              >
                {PUBLIC_PORTFOLIO.ctaLabel}
              </Link>
              <Link
                href="#systems"
                className="inline-flex h-11 items-center rounded-md border border-slate-800/15 bg-white/60 px-5 text-sm font-medium text-slate-800 transition hover:bg-white"
              >
                View systems
              </Link>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={DELAY * 2}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md bg-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)] md:mx-0 md:max-w-none">
            <Image
              src={PERSON.avatarUrl}
              alt={PERSON.name}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 38vw"
              className="object-cover object-[center_12%]"
            />
          </div>
        </BlurFade>
      </section>

      <section
        id="profile"
        className="scroll-mt-24 border-t border-slate-800/10 py-16 md:py-20"
      >
        <BlurFade delay={DELAY}>
          <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-slate-500 uppercase">
              Profile
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-700 md:text-xl md:leading-relaxed">
              {PUBLIC_PORTFOLIO.summary}
            </p>
          </div>
        </BlurFade>
      </section>

      <section
        id="experience"
        className="scroll-mt-24 border-t border-slate-800/10 py-16 md:py-20"
      >
        <BlurFade delay={DELAY}>
          <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-slate-500 uppercase">
              Experience
            </h2>
            <div className="space-y-10">
              <div className="divide-y divide-slate-800/10">
                {work.map((entry) => (
                  <Link
                    key={entry.company}
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 py-6 first:pt-0 last:pb-0 sm:gap-5"
                  >
                    <div className="relative size-12 shrink-0 overflow-hidden rounded-md border border-slate-800/10 bg-white sm:size-14">
                      <Image
                        src={entry.logoUrl}
                        alt={entry.company}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                        <div>
                          <p className="font-[family-name:var(--font-public-serif)] text-lg font-semibold tracking-tight text-slate-900 transition group-hover:opacity-70">
                            {entry.company}
                          </p>
                          <p className="text-sm text-slate-500">{entry.title}</p>
                        </div>
                        <p className="shrink-0 text-sm text-slate-400">
                          {entry.start} — {entry.end}
                        </p>
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                        {entry.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div>
                <p className="mb-4 text-xs font-medium tracking-wide text-slate-500 uppercase">
                  Education
                </p>
                {EDUCATION.map((edu) => (
                  <Link
                    key={edu.school}
                    href={edu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4"
                  >
                    <div className="relative size-12 shrink-0 overflow-hidden rounded-md border border-slate-800/10 bg-white">
                      <Image
                        src={edu.logoUrl}
                        alt={edu.school}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 transition group-hover:opacity-70">
                        {edu.school}
                      </p>
                      <p className="text-sm text-slate-500">{edu.degree}</p>
                      <p className="mt-1 text-sm text-slate-400">
                        {edu.start} — {edu.end}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <section
        id="systems"
        className="scroll-mt-24 border-t border-slate-800/10 py-16 md:py-24"
      >
        <BlurFade delay={DELAY}>
          <div className="mb-12 max-w-xl md:mb-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-slate-500 uppercase">
              {PUBLIC_PORTFOLIO.projectsHeading}
            </h2>
            <p className="mt-4 font-[family-name:var(--font-public-serif)] text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {PUBLIC_PORTFOLIO.projectsIntro}
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={DELAY}>
          <ProjectsGrid projects={projects} />
        </BlurFade>
      </section>

      <section className="border-t border-slate-800/10 py-16 md:py-20">
        <BlurFade delay={DELAY}>
          <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-slate-500 uppercase">
              Capabilities
            </h2>
            <div className="space-y-8">
              {Object.entries(PUBLIC_PORTFOLIO.skills).map(([label, items]) => (
                <div key={label}>
                  <p className="mb-3 text-xs font-medium tracking-wide text-slate-500 uppercase">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-sm border border-slate-800/10 bg-white/70 px-3 py-1 text-xs font-normal text-slate-700 shadow-none"
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

      <section
        id="contact"
        className="scroll-mt-24 border-t border-slate-800/10 py-16 md:py-24"
      >
        <BlurFade delay={DELAY}>
          <div className="max-w-2xl space-y-6">
            <h2 className="text-sm font-medium tracking-[0.18em] text-slate-500 uppercase">
              Contact
            </h2>
            <p className="font-[family-name:var(--font-public-serif)] text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {PUBLIC_PORTFOLIO.contactHeading}
            </p>
            <p className="text-lg text-slate-600">
              {PUBLIC_PORTFOLIO.contactBody}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={`mailto:${PERSON.contact.email}`}
                className="inline-flex h-11 items-center rounded-md bg-slate-900 px-5 text-sm font-medium text-[#f7f5f0] transition hover:bg-slate-800"
              >
                {PERSON.contact.email}
              </Link>
              <Link
                href={PERSON.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  )
}
