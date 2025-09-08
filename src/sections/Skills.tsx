import Container from '@/components/Container'
import Section from '../components/Section'
import Card from '@/components/Card'
import { skills } from '@/data/skills'


export default function Skills() {
return (
<Container>
<Section id="skills" title="Skills">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
{Object.entries(skills).map(([group, items]) => (
<Card key={group}>
<h3 className="font-semibold mb-2">{group}</h3>
<ul className="text-slate-700 dark:text-slate-300 space-y-1">
{items.map((s) => (
<li key={s}>• {s}</li>
))}
</ul>
</Card>
))}
</div>
</Section>
</Container>
)
}