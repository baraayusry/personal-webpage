import Container from '@/components/Container'
import Section from '../components/Section'
import Card from '@/components/Card'
import { site } from '@/data/site'


export default function Contact() {
return (
<Container>
<Section id="contact" title="Contact">
<Card>
<p className="text-slate-700 dark:text-slate-300">Feel free to reach out: <a className="text-brand-700 dark:text-brand-400 hover:underline" href={`mailto:${site.email}`}>{site.email}</a></p>
<div className="mt-3 flex gap-4">
<a href={site.github} className="hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
<a href={site.linkedin} className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
<a href="#" className="hover:underline">Twitter/X</a>
</div>
</Card>
</Section>
</Container>
)
}
