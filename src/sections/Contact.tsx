import Container from '@/components/Container'
import Section from '../components/Section'
import Card from '@/components/Card'


export default function Contact() {
return (
<Container>
<Section id="contact" title="Contact" subtitle="Email or socials.">
<Card>
<p className="text-slate-700 dark:text-slate-300">Feel free to reach out: <a className="text-brand-700 dark:text-brand-400 hover:underline" href="mailto:you@example.com">you@example.com</a></p>
<div className="mt-3 flex gap-4">
<a href="https://github.com/yourname" className="hover:underline">GitHub</a>
<a href="https://www.linkedin.com/in/yourname" className="hover:underline">LinkedIn</a>
<a href="#" className="hover:underline">Twitter/X</a>
</div>
</Card>
</Section>
</Container>
)
}