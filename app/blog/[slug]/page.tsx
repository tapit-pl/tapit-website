import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { blogPosts, getBlogPost, getAllSlugs } from '@/lib/blog'
import FinalCTA from '@/components/home/FinalCTA'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Tapit`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const paragraphs = content.trim().split('\n\n')
    return paragraphs.map((block, i) => {
      if (block.startsWith('## ')) {
        return (
          <h2 key={i} className="font-heading font-bold text-2xl text-[#1c1b19] mt-10 mb-4">
            {block.replace('## ', '')}
          </h2>
        )
      }
      if (block.startsWith('**') || block.includes('**')) {
        // Handle inline bold
        const rendered = block.split('**').map((part, j) =>
          j % 2 === 1 ? <strong key={j} className="text-[#1c1b19] font-semibold">{part}</strong> : part
        )
        return <p key={i} className="text-[#6b6860] leading-relaxed mb-4">{rendered}</p>
      }
      if (block.match(/^[0-9]+\./m)) {
        const lines = block.split('\n').filter(Boolean)
        return (
          <ol key={i} className="list-decimal list-inside space-y-2 mb-4 text-[#6b6860]">
            {lines.map((line, j) => {
              const text = line.replace(/^[0-9]+\.\s*/, '')
              const parts = text.split('**').map((part, k) =>
                k % 2 === 1 ? <strong key={k} className="text-[#1c1b19] font-semibold">{part}</strong> : part
              )
              return <li key={j} className="leading-relaxed">{parts}</li>
            })}
          </ol>
        )
      }
      if (block.startsWith('- ')) {
        const lines = block.split('\n').filter(l => l.startsWith('- '))
        return (
          <ul key={i} className="space-y-2 mb-4 text-[#6b6860]">
            {lines.map((line, j) => {
              const text = line.replace(/^-\s*/, '')
              const parts = text.split('**').map((part, k) =>
                k % 2 === 1 ? <strong key={k} className="text-[#1c1b19] font-semibold">{part}</strong> : part
              )
              return (
                <li key={j} className="flex gap-2 leading-relaxed">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{parts}</span>
                </li>
              )
            })}
          </ul>
        )
      }
      if (block.trim() === '') return null
      const parts = block.split('**').map((part, j) =>
        j % 2 === 1 ? <strong key={j} className="text-[#1c1b19] font-semibold">{part}</strong> : part
      )
      return <p key={i} className="text-[#6b6860] leading-relaxed mb-4">{parts}</p>
    })
  }

  return (
    <>
      <article className="pt-20 pb-16 md:pt-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#6b6860] hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Wróć do bloga
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center gap-1.5 text-xs text-accent bg-accent/10 px-2.5 py-1 rounded-full font-medium">
                <Tag size={10} />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#6b6860]">
                <Clock size={11} />
                {post.readTime}
              </span>
              <time className="text-xs text-[#6b6860]">
                {new Date(post.date).toLocaleDateString('pl-PL', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </time>
            </div>

            <h1 className="mb-5">{post.title}</h1>
            <p className="text-[#6b6860] text-lg leading-relaxed">{post.excerpt}</p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.08)] to-transparent mb-10" />

          {/* Content */}
          <div className="prose-tapit">
            {renderContent(post.content)}
          </div>

          {/* Author */}
          <div className="mt-12 pt-8 border-t border-[rgba(0,0,0,0.08)] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-white shrink-0"
              style={{ background: 'linear-gradient(135deg, #6366f1, #f59e0b)' }}>
              MS
            </div>
            <div>
              <p className="font-medium text-[#1c1b19]">Maciej Sieńko</p>
              <p className="text-sm text-[#6b6860]">Założyciel Tapit, strateg marketingowy</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 border-t border-[rgba(0,0,0,0.07)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-2xl text-[#1c1b19] mb-8" style={{ fontSize: '1.5rem' }}>
            Inne artykuły
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 3)
              .map(related => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.08)] rounded-xl p-5 hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="text-xs text-accent font-medium">{related.category}</span>
                  <h3 className="font-heading font-bold text-base text-[#1c1b19] mt-2 mb-2 leading-snug">
                    {related.title}
                  </h3>
                  <p className="text-xs text-[#6b6860] leading-relaxed">{related.excerpt.slice(0, 90)}…</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
