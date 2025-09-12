import ThemeToggle from '@/components/ThemeToggle'
import Container from '@/components/Container'
import { site } from '@/data/site'
import { useEffect, useMemo, useState } from 'react'


const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' }
]


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('#home')

  const sectionSelectors = useMemo(
    () => ['#home', ...links.map((l) => l.href)],
    []
  )

  useEffect(() => {
    const computeActive = () => {
      const viewportH = window.innerHeight
      const viewportCenter = viewportH / 2

      let bestSel = '#home'
      let bestDist = Number.POSITIVE_INFINITY

      sectionSelectors.forEach((sel) => {
        const el = document.querySelector(sel) as HTMLElement | null
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.bottom <= 0 || rect.top >= viewportH) return
        const center = rect.top + rect.height / 2
        const dist = Math.abs(center - viewportCenter)
        if (dist < bestDist) {
          bestDist = dist
          bestSel = `#${el.id}`
        }
      })

      setActive(bestSel)
      sectionSelectors.forEach((sel) => {
        const el = document.querySelector(sel) as HTMLElement | null
        if (!el) return
        const isHero = el.id === 'home'
        const shouldBacklight = `#${el.id}` === bestSel && !isHero
        el.classList.toggle('section-active', shouldBacklight)
      })
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      computeActive()
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionSelectors])

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b border-slate-200/70 dark:border-slate-800/70',
        'backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/60',
        'transition-all duration-300 ease-out',
        'relative overflow-hidden'
      ].join(' ')}
    >
      <div className="retro-glow opacity-30" aria-hidden="true" />
      <div className="retro-grid opacity-25 dark:opacity-15" aria-hidden="true" />
      <div className="retro-scan opacity-10" aria-hidden="true" />

      <Container>
        <nav className={[
          'flex items-center justify-between',
          'transition-all duration-300',
          scrolled ? 'h-14' : 'h-24'
        ].join(' ')}>
          <a href="#home" className={[
            'font-semibold text-neon transition-all duration-300',
            scrolled ? 'text-xl' : 'text-2xl'
          ].join(' ')}>
            {site.name}
          </a>
          <div className="flex items-center gap-4">
            <ul className={[
              'hidden md:flex items-center gap-6 transition-all duration-300',
              scrolled ? 'text-sm' : 'text-base'
            ].join(' ')}>
              {links.map((l) => {
                const isActive = active === l.href
                return (
                  <li key={l.href}>
                    <a
                      className={[
                        'hover:text-brand-600 dark:hover:text-brand-400 inline-flex items-center gap-1',
                        isActive ? 'text-brand-600 dark:text-brand-400' : ''
                      ].join(' ')}
                      href={l.href}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {isActive ? <span className="retro-pointer" aria-hidden>🕹️</span> : null}
                      {l.label}
                    </a>
                  </li>
                )
              })}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  )
}
