import { cn } from "@/lib/utils"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Props {
  title: string
  href?: string
  description: string
  dates: string
  image?: string
  links?: readonly {
    type: string
    href: string
  }[]
  align?: "left" | "right"
  className?: string
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  image,
  links,
  align = "left",
  className,
}: Props) {
  const preview = links?.find(
    (l) =>
      l.type === "Preview" ||
      l.type === "Website" ||
      l.type === "Case study"
  )
  const source = links?.find((l) => l.type === "Source")
  const primaryHref = preview?.href || href || "#"

  return (
    <article
      className={cn(
        "group w-full md:w-[58%] lg:w-[52%]",
        align === "right" && "md:ml-auto",
        className
      )}
    >
      <Link
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)]"
      >
        {image && (
          <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
            />
          </div>
        )}
      </Link>

      <div className="mt-4 flex flex-col gap-2 px-0.5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md space-y-1">
          <div className="flex items-baseline gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-950 sm:text-xl">
              {title}
            </h3>
            <span className="text-xs text-neutral-400">{dates}</span>
          </div>
          <p className="text-sm leading-relaxed text-neutral-500">
            {description}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3 pt-1 sm:pt-0">
          {preview && (
            <Link
              href={preview.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 transition hover:opacity-60"
            >
              Preview
              <ArrowUpRight className="size-3.5" />
            </Link>
          )}
          {source && (
            <Link
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
            >
              <Github className="size-3.5" />
              Source
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
