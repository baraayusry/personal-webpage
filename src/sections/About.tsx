import Container from '@/components/Container'
import Section from '../components/Section'


export default function About() {
return (
<Container>
<Section id="about" title="About" subtitle="A short bio about you and your interests.">
<p className="leading-7 text-slate-700 dark:text-slate-300">
I am a <strong>Computer Science</strong> master\'s student focusing on information retrieval, LLMs, and
multi-agent systems. I enjoy building robust clusters and optimizing performance.
</p>
</Section>
</Container>
)
}