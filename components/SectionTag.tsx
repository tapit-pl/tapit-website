interface SectionTagProps {
  children: React.ReactNode
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dark?: boolean
}

export default function SectionTag({ children, className = '' }: SectionTagProps) {
  return (
    <div className={`inline-flex items-center gap-2 mb-4 ${className}`}>
      <span className="w-6 h-0.5 bg-accent rounded-full" />
      <span className="text-accent text-xs font-heading font-bold uppercase tracking-[2px]">
        {children}
      </span>
    </div>
  )
}
