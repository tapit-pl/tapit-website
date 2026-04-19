interface SectionTagProps {
  children: React.ReactNode
  className?: string
}

export default function SectionTag({ children, className = '' }: SectionTagProps) {
  return (
    <div className={`inline-flex items-center gap-2 mb-4 ${className}`}>
      <span className="w-6 h-0.5 bg-accent rounded-full" />
      <span className="text-accent text-xs font-heading font-700 uppercase tracking-[2px]">
        {children}
      </span>
    </div>
  )
}
