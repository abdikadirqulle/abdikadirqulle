"use client"

import { ProjectCard } from "@/components/project-card"
import { useState } from "react"

interface Project {
  title: string
  href: string
  dates: string
  description: string
  image: string
  links: readonly { type: string; href: string }[]
}

/** 2-column grid: hide the last 2 rows by default (4 projects). */
const COLUMNS = 2
const HIDDEN_ROWS = 2

interface Props {
  projects: readonly Project[]
}

export function ProjectsGrid({ projects }: Props) {
  const hiddenCount = Math.min(COLUMNS * HIDDEN_ROWS, Math.max(0, projects.length - COLUMNS))
  const initialVisible = projects.length - hiddenCount
  const [isExpanded, setIsExpanded] = useState(false)

  const visibleProjects = isExpanded
    ? projects
    : projects.slice(0, initialVisible)

  const canToggle = hiddenCount > 0

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.title}
            href={project.href}
            title={project.title}
            description={project.description}
            dates={project.dates}
            image={project.image}
            links={project.links}
          />
        ))}
      </div>

      {canToggle && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((v) => !v)}
            className="inline-flex h-11 items-center rounded-full border border-neutral-200 bg-white px-6 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
          >
            {isExpanded
              ? "Show less"
              : `Show more (${hiddenCount} more)`}
          </button>
        </div>
      )}
    </div>
  )
}
