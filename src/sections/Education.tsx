import Section from '@/components/Section' 
import Timeline from '@/components/Timeline'
import { education } from '@/data/education' 
import type { EducationItem } from '@/types'

export default function Education() {
  return (
    <Section id="education" title="Education">
      
      <Timeline items={education}>
        {(item: EducationItem, isActive: boolean) => (
          <>
            <h3
              className={
                `font-semibold tracking-tight transition-all duration-300 ` +
                (isActive ? 'text-brand-600 dark:text-brand-300 text-2xl' : 'text-xl')
              }
            >
              {item.degree}
            </h3>
            <div
              className={
                `text-base text-slate-600 dark:text-slate-400 flex items-center gap-2 transition-transform duration-300 ` +
                (isActive ? 'scale-[1.01]' : 'scale-100')
              }
            >
              {item.logo && (
                <img
                  src={item.logo}
                  alt={`${item.university} logo`}
                  className="h-8 w-8 rounded-sm ring-1 ring-slate-200 dark:ring-slate-800 object-contain"
                />
              )}
              <span>
                {item.university}
                {item.location ? ` • ${item.location}` : ''}
              </span>
            </div>
            <p className="text-base mt-1">
              {item.start}
              {item.end ? ` — ${item.end}` : ' — present'}
            </p>
            {item.bullets && (
              <ul className="list-disc ms-6 mt-2 space-y-1">
                {item.bullets.map((b, j) => (
                  <li key={j} className="text-base text-slate-700 dark:text-slate-300">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </Timeline>
    </Section>
  )
}