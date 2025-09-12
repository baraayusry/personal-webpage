import Container from '@/components/Container'
import Section from '../components/Section'
import Card from '@/components/Card'
import { skills, SkillGroup, SkillItem } from '@/data/skills'

export default function Skills() {
  return (
    <Container>
      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {skills.map((group: SkillGroup) => (
            <Card key={group.groupName}>
              <h3 className="font-semibold mb-4 text-xl flex items-center gap-3">
                {group.groupLogo}
                {group.groupName}
              </h3>
              <ul className="text-slate-700 dark:text-slate-300 space-y-2 text-base">
                {group.items.map((item: SkillItem) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <span className="text-slate-500 dark:text-slate-400">{item.logo}</span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  )
}