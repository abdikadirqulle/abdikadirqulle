import BlurFade from "@/components/magicui/blur-fade"
import { ProjectsGrid } from "@/components/projects-grid"
import { Badge } from "@/components/ui/badge"
import { EDUCATION } from "@/data/education"
import { PERSON } from "@/data/person"
import { ICT_PORTFOLIO } from "@/data/portfolios/ict"
import { projectsFor, workFor } from "@/lib/portfolio-data"
import Image from "next/image"
import Link from "next/link"

const DELAY = 0.05

const FOCUS_AREAS = [
  {
    title: "Digital platforms",
    body: "Websites, custom systems, and digital services for organisations that need reliable day-to-day tools.",
  },
  {
    title: "Institutional systems",
    body: "Information systems that support planning, records, and administrative workflows after launch.",
  },
  {
    title: "Post-launch support",
    body: "Discovery through delivery and ongoing support — keeping platforms usable once they are live.",
  },
] as const

export default function IctPage() {
  const work = workFor("ict")
  const projects = projectsFor("ict")

  return (
    <main className="flex flex-col">
      <section className="grid items-center gap-12 pb-16 pt-4 md:grid-cols-[1.2fr_0.8fr] md:gap-14 md:pb-24 md:pt-8">
        <BlurFade delay={DELAY}>
          <div className="space-y-5 md:space-y-6">
            <p className="text-xs font-medium tracking-[0.2em] text-cyan-700/80 uppercase">
              {PERSON.name}
            </p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.1rem]">
              {ICT_PORTFOLIO.headline}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              {ICT_PORTFOLIO.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href={`mailto:${PERSON.contact.email}`}
                className="inline-flex h-11 items-center rounded-lg bg-slate-900 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                {ICT_PORTFOLIO.ctaLabel}
              </Link>
              <Link
                href="#work"
                className="inline-flex h-11 items-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
              >
                Selected systems
              </Link>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={DELAY * 2}>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-800 via-slate-700 to-cyan-900 p-8 shadow-lg shadow-slate-900/10 md:min-h-[22rem] md:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
              aria-hidden="true"
            />
            <div className="relative space-y-6 text-slate-100">
              <p className="text-xs font-medium tracking-[0.18em] text-cyan-200/90 uppercase">
                Through Casritek
              </p>
              <p className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                ICT solutions, systems, and support for organisations that need technology that works after launch.
              </p>
              <p className="max-w-sm text-sm leading-relaxed text-slate-300">
                Businesses, NGOs, and public institutions — discovery, delivery, and post-launch support.
              </p>
            </div>
          </div>
        </BlurFade>
      </section>

      <section
        id="focus"
        className="scroll-mt-24 border-t border-slate-200/80 py-16 md:py-20"
      >
        <BlurFade delay={DELAY}>
          <div className="mb-10 max-w-xl">
            <h2 className="text-sm font-medium tracking-[0.18em] text-slate-400 uppercase">
              Focus
            </h2>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Practical ICT work that keeps systems usable.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {FOCUS_AREAS.map((area) => (
              <div key={area.title} className="space-y-2">
                <h3 className="text-lg font-medium tracking-tight text-slate-900">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      <section
        id="experience"
        className="scroll-mt-24 border-t border-slate-200/80 py-16 md:py-20"
      >
        <BlurFade delay={DELAY}>
          <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-slate-400 uppercase">
              Experience
            </h2>
            <div className="space-y-10">
              <div className="divide-y divide-slate-200/80">
                {work.map((entry) => (
                  <Link
                    key={entry.company}
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 py-6 first:pt-0 last:pb-0 sm:gap-5"
                  >
                    <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white sm:size-14">
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
                          <p className="text-lg font-medium tracking-tight text-slate-900 transition group-hover:text-cyan-800">
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
                <p className="mb-4 text-xs font-medium tracking-wide text-slate-400 uppercase">
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
                    <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white">
                      <Image
                        src={edu.logoUrl}
                        alt={edu.school}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 transition group-hover:text-cyan-800">
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
        id="work"
        className="scroll-mt-24 border-t border-slate-200/80 py-16 md:py-24"
      >
        <BlurFade delay={DELAY}>
          <div className="mb-12 max-w-xl md:mb-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-slate-400 uppercase">
              {ICT_PORTFOLIO.projectsHeading}
            </h2>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {ICT_PORTFOLIO.projectsIntro}
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={DELAY}>
          <ProjectsGrid projects={projects} />
        </BlurFade>
      </section>

      <section className="border-t border-slate-200/80 py-16 md:py-20">
        <BlurFade delay={DELAY}>
          <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
            <h2 className="text-sm font-medium tracking-[0.18em] text-slate-400 uppercase">
              Skills
            </h2>
            <div className="space-y-8">
              {Object.entries(ICT_PORTFOLIO.skills).map(([label, items]) => (
                <div key={label}>
                  <p className="mb-3 text-xs font-medium tracking-wide text-slate-400 uppercase">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-normal text-slate-700 shadow-none"
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
        className="scroll-mt-24 border-t border-slate-200/80 py-16 md:py-24"
      >
        <BlurFade delay={DELAY}>
          <div className="max-w-2xl space-y-6">
            <h2 className="text-sm font-medium tracking-[0.18em] text-slate-400 uppercase">
              Contact
            </h2>
            <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {ICT_PORTFOLIO.contactHeading}
            </p>
            <p className="text-lg text-slate-600">{ICT_PORTFOLIO.contactBody}</p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={`mailto:${PERSON.contact.email}`}
                className="inline-flex h-11 items-center rounded-lg bg-slate-900 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
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
