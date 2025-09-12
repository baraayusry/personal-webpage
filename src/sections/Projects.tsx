import { useState } from 'react'
import Container from '@/components/Container'
import Section from '../components/Section'
import Card from '@/components/Card'
import { projects } from '@/data/projects'
import { a } from 'framer-motion/m'

const isGitRepo = (url: string) => {
  try {
    const { hostname } = new URL(url)
    const blocked = ['github.com', 'gitlab.com', 'bitbucket.org']
    return blocked.some((d) => hostname === d || hostname.endsWith(`.${d}`))
  } catch { return false }
}
const getGitHubPreviewImage = (url: string) => {
  try {
    const { hostname, pathname } = new URL(url)
    if (hostname !== 'github.com') return null
    const [_, owner, repo] = pathname.split('/')
    if (owner && repo) {
      return `https://socialify.git.ci/${owner}/${repo}/image?theme=Dark`
    }
    return null
  } catch { return null }
}


export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Container>
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const previewUrl = p.repo
            const isRepo = previewUrl ? isGitRepo(previewUrl) : false
            const gitHubImageUrl = isRepo && previewUrl ? getGitHubPreviewImage(previewUrl) : null

            return (
              <div
                key={p.title}
                className="group"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card>
                  {previewUrl && (
                    <div className="relative overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 mb-4 bg-slate-50 dark:bg-slate-900 h-0 group-hover:h-40 transition-all duration-300 ease-in-out">
                      {hoveredIndex === i && (
                        <>
                          {gitHubImageUrl ? <a href={previewUrl}><img  src={gitHubImageUrl} alt={`${p.title} GitHub preview`} className="w-full h-full object-cover" /></a>
                          : isRepo ? <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-500 dark:text-slate-400 select-none">Preview unavailable for this repository</div>
                          : <a href={previewUrl}> <iframe src={previewUrl} className="absolute inset-0 w-full h-full" title={`${p.title} preview`} loading="lazy" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" /> </a>
                          }
                        </>
                      )}
                    </div>
                  )}

                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-slate-700 dark:text-slate-300 flex-grow">{p.description}</p>

                  <div className="mt-auto pt-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs rounded-full px-2 py-1 ring-1 ring-slate-300 dark:ring-slate-700">{t}</span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-4 text-sm">
                      {p.repo && (
                        <a href={p.repo} className="text-brand-700 dark:text-brand-400 hover:underline" target="_blank" rel="noopener noreferrer">Repository</a>
                      )}
                      
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </Section>
    </Container>
  )
}