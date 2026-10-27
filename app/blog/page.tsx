import BlurFade from "@/components/magicui/blur-fade"
import { getBlogPosts } from "@/data/blog"
import Link from "next/link"

export const metadata = {
  title: "Blog",
  description: "Notes on software, products, and building in Somalia.",
}

const BLUR_FADE_DELAY = 0.04

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <section className="pb-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="mb-2 text-3xl font-semibold tracking-tight text-neutral-950">
          Blog
        </h1>
        <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-neutral-500">
          Short articles on building software, shipping products, and lessons
          from the work.
        </p>
      </BlurFade>
      <div className="divide-y divide-neutral-100">
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
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="flex flex-col gap-1 py-5 transition hover:opacity-80"
                href={`/blog/${post.slug}`}
              >
                <p className="font-medium tracking-tight text-neutral-900">
                  {post.metadata.title}
                </p>
                <p className="text-sm text-neutral-500">
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
