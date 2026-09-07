interface SectionTitleProps {
  subtitle?: string
  title: string
}

export function SectionTitle({
  subtitle,
  title
}: SectionTitleProps) {
  return (
    <div className="section-title">

      {subtitle && (
        <span>
          {subtitle}
        </span>
      )}

      <h2>{title}</h2>

    </div>
  )
}