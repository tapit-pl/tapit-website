import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { blogPosts } from '@/lib/blog'
import SectionTag from '@/components/SectionTag'

export const metadata: Metadata = {
  title: 'Blog — Tapit',
  description:
    'Praktyczne porady o Google Ads, SEO, marketingu lokalnym i pozycjonowaniu w AI od agencji Tapit z Krakowa.',
}

export default function BlogPage() {
  return (
    <section className="pt-20 pb-24 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <SectionTag>Blog</SectionTag>
          <h1 className="mb-4">Wiedza, która sprzedaje</h1>
          <p className="text-[#6b6860] text-lg max-w-xl">
            Praktyczne porady o marketingu cyfrowym — bez lania wody, z konkretnymi przykładami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.08)] rounded-2xl overflow-hidden hover:border-accent/25 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-[rgba(0,0,0,0.04)] border-b border-[rgba(0,0,0,0.07)] flex items-center justify-center">
                <p className="text-xs text-[#6b6860]">[Miniatura artykułu]</p>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-accent bg-accent/10 px-2.5 py-1 rounded-full font-medium">
                    <Tag size={10} />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[#6b6860]">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-heading font-bold text-lg text-[#1c1b19] leading-snug mb-3" style={{ fontSize: '1.1rem' }}>
                  {post.title}
                </h2>

                <p className="text-[#6b6860] text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-[rgba(0,0,0,0.07)]">
                  <time className="text-xs text-[#6b6860]">
                    {new Date(post.date).toLocaleDateString('pl-PL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="flex items-center gap-1.5 text-sm text-accent font-medium group/link">
                    Czytaj dalej
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
