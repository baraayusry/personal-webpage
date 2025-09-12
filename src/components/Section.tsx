import { PropsWithChildren } from 'react'


export default function Section({ id, title, subtitle, children }: PropsWithChildren<{ id: string; title: string; subtitle?: string }>) {
return (
<section id={id} className="max-w-4xl mx-auto px-4 section-y scroll-mt">
<div className="mb-8">
<h2 className="section-title">{title}</h2>
{subtitle && <p className="mt-2 section-subtitle">{subtitle}</p>}
</div>
{children}
<div className="mt-16" aria-hidden="true">
  <div className="section-divider" />
  </div>
</section>
)
}
