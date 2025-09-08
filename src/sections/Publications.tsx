import Container from '@/components/Container'
import Section from '../components/Section'
import Card from '@/components/Card'
import { publications } from '@/data/publications'


export default function Publications() {
return (
<Container>
<Section id="publications" title="Publications" subtitle="Selected papers and preprints.">
<div className="space-y-4">
{publications.map((pub) => (
<Card key={pub.title}>
<h3 className="font-semibold">{pub.title}</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{pub.authors}</p>
<p className="text-sm mt-1">{pub.venue} • {pub.year}</p>
{pub.link && (
<a href={pub.link} className="mt-2 inline-block text-brand-700 dark:text-brand-400 hover:underline text-sm">Read</a>
)}
</Card>
))}
</div>
</Section>
</Container>
)
}