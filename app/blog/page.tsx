import BlurFade from "@/components/magicui/blur-fade"
import { getBlogPosts } from "@/data/blog"
import Link from "next/link"

export const metadata = {
  title: "Blog",
  description: "Notes on software, products, and building in Somalia.",
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <section className="mx-auto max-w-2xl pb-8 pt-4">
      <BlurFade delay={0.04}>
        <p className="text-sm font-medium tracking-[0.18em] text-neutral-400 uppercase">
          Writing
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">
          Blog
        </h1>
        <p className="mt-4 mb-12 max-w-lg text-lg leading-relaxed text-neutral-500">
          Short articles on building software, shipping products, and lessons
          from the work.
        </p>
      </BlurFade>
      <div className="divide-y divide-neutral-200/80">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .map((post, id) => (
            <BlurFade delay={0.08 + id * 0.04} key={post.slug}>
              <Link
                className="group flex flex-col gap-1.5 py-7 transition"
                href={`/blog/${post.slug}`}
              >
                <p className="text-xl font-medium tracking-tight text-neutral-950 group-hover:opacity-60">
                  {post.metadata.title}
                </p>
                <p className="text-[15px] leading-relaxed text-neutral-500">
                  {post.metadata.summary}
                </p>
                <p className="text-xs text-neutral-400">
                  {post.metadata.publishedAt}
                </p>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  )
}
