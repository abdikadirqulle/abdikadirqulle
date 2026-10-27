import CurrentlyCooking from "@/components/currently-cooking"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { ProjectCard } from "@/components/project-card"
import { ResumeCard } from "@/components/resume-card"
import ServicesCard from "@/components/Services-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DATA } from "@/data/resume"
import Link from "next/link"
import Markdown from "react-markdown"

const BLUR_FADE_DELAY = 0.04

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-12">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-4">
            <div className="flex flex-1 flex-col space-y-3">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFadeText
                className="max-w-[34rem] text-[15px] leading-relaxed text-neutral-500 sm:text-base"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    href="mailto:abdikadirqulle@gmail.com"
                    className="inline-flex h-9 items-center rounded-full bg-neutral-950 px-4 text-sm font-medium text-white transition hover:bg-neutral-800"
                  >
                    Start a project
                  </Link>
                  <Link
                    href="#projects"
                    className="inline-flex h-9 items-center rounded-full border border-neutral-200 bg-white px-4 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                  >
                    See my work
                  </Link>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border border-neutral-200 sm:size-36 md:size-40">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="text-sm font-medium tracking-wide text-neutral-400">
            About
          </h2>
          <div className="prose prose-neutral mt-3 max-w-none text-[15px] leading-relaxed text-neutral-600 prose-p:my-0">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </section>

      <section id="c-cooking">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <CurrentlyCooking />
        </BlurFade>
      </section>

      <section id="services">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <ServicesCard />
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-sm font-medium tracking-wide text-neutral-400">
              Work
            </h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-sm font-medium tracking-wide text-neutral-400">
              Education
            </h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-sm font-medium tracking-wide text-neutral-400">
              Skills
            </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 12 + id * 0.03}>
                <Badge
                  variant="secondary"
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-normal text-neutral-700"
                >
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="w-full space-y-8 py-4">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-2">
              <h2 className="text-sm font-medium tracking-wide text-neutral-400">
                Selected work
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-neutral-500">
                Websites, platforms, and systems built for clients and products
                — from storefronts to management software.
              </p>
            </div>
          </BlurFade>
          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-sm font-medium tracking-wide text-neutral-400">
                Contact
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-neutral-500">
                Have a project in mind? Email{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                >
                  {DATA.contact.email}
                </Link>{" "}
                or message me on{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                >
                  X
                </Link>
                .
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
