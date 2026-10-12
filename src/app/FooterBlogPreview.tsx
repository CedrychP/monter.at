"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type FooterBlogPreviewPost = {
  slug: string;
  title: string;
  category: string;
  image: string;
};

const visibleCount = 3;
const rotateMs = 6000;

export default function FooterBlogPreview({ posts }: { posts: FooterBlogPreviewPost[] }) {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const canRotate = posts.length > visibleCount;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!canRotate || paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setStart((current) => (current + 1) % posts.length);
    }, rotateMs);
    return () => window.clearInterval(timer);
  }, [canRotate, paused, posts.length, reducedMotion]);

  if (posts.length === 0) return null;

  const visible = Array.from({ length: Math.min(visibleCount, posts.length) }, (_, offset) => {
    return posts[(start + offset) % posts.length];
  });

  return (
    <section
      className="mt-8 border-t border-white/15 pt-6"
      aria-label="Blogbeiträge"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[0.8rem] font-medium uppercase tracking-[0.2em] text-white/75">Blog</p>
        <Link href="/blog" className="text-xs font-medium uppercase tracking-[0.14em] text-white/70 transition hover:text-white">
          <span>Alle ansehen</span>
        </Link>
      </div>
      <ol key={start} className="footer-blog-in mt-4 grid gap-3">
        {visible.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-[4.25rem_1fr] items-center gap-3"
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-white/10">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="68px"
                  className="object-cover object-center"
                />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent-on-dark)]">
                  {post.category}
                </span>
                <span className="mt-1 block text-sm font-light leading-snug text-white group-hover:text-[color:var(--accent-on-dark)]">
                  {post.title}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
