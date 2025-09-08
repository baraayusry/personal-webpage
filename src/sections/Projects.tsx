import Container from '@/components/Container'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { projects } from '@/data/projects'


export default function Projects() {
return (
<Container>
<Section id="projects" title="Projects">
<div className="grid md:grid-cols-2 gap-6">
{projects.map((p) => (
<Card key={p.title}>
<h3 className="text-lg font-semibold">{p.title}</h3>
<p className="mt-2 text-slate-700 dark:text-slate-300">{p.description}</p>
<div className="mt-3 flex flex-wrap gap-2">
{p.tags.map((t) => (
<span key={t} className="text-xs rounded-full px-2 py-1 ring-1 ring-slate-300 dark:ring-slate-700">{t}</span>
))}
</div>
<div className="mt-4 flex gap-4 text-sm">
{p.repo && (
<a href={p.repo} className="text-brand-700 dark:text-brand-400 hover:underline">Repository</a>
)}
{p.link && (
<a href={p.link} className="hover:underline">Live</a>
)}
</div>
</Card>
))}
</div>
</Section>
</Container>
)
}