import Container from '@/components/Container'
import Section from '@/components/Section'
import Timeline from '@/components/Timeline'
import { experience } from '@/data/experience'


export default function Experience() {
return (
<Container>
<Section id="experience" title="Experience" subtitle="Education and work history.">
<Timeline items={experience} />
</Section>
</Container>
)
}