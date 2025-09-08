import type { ExperienceItem } from '@/types'


export default function Timeline({ items }: { items: ExperienceItem[] }) {
return (
<ol className="relative border-s border-slate-200 dark:border-slate-800">
{items.map((it, i) => (
<li key={i} className="mb-10 ms-4">
<div className="absolute w-3 h-3 bg-brand-500 rounded-full mt-2 -start-1.5 border border-white dark:border-slate-900"></div>
<h3 className="text-lg font-semibold">{it.title}</h3>
<p className="text-sm text-slate-600 dark:text-slate-400">{it.org}{it.location ? ` • ${it.location}` : ''}</p>
<p className="text-sm mt-1">{it.start}{it.end ? ` — ${it.end}` : ' — present'}</p>
{it.bullets && (
<ul className="list-disc ms-5 mt-2 space-y-1">
{it.bullets.map((b, j) => (
<li key={j} className="text-slate-700 dark:text-slate-300">{b}</li>
))}
</ul>
)}
</li>
))}
</ol>
)
}