import Container from '@/components/Container'
import { motion } from 'framer-motion'
import { site } from '@/data/site'


export default function Hero() {
return (
<section id="home" className="section-y pb-28 sm:pb-36 relative overflow-hidden bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900">
<div className="retro-glow" aria-hidden="true" />
<div className="retro-grid opacity-40 dark:opacity-30" aria-hidden="true" />
<div className="retro-scan opacity-20 dark:opacity-10" aria-hidden="true" />
<Container>
<div className="grid md:grid-cols-3 gap-8 items-center">
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="md:col-span-2"
>
<h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{site.name}</h1>
<p className="mt-4 text-lg text-slate-700 dark:text-slate-300 flex items-center gap-2">
  <span>{site.tagline}</span>
  <img
    src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif"
    alt="coding"
    loading="lazy"
    className="h-6 w-6 rounded-sm ring-1 ring-slate-200/50 dark:ring-slate-800/60"
    onError={(e) => {
      const fallback = 'https://media.giphy.com/media/Q7SKqn3G97xpmfSOvG/giphy.gif'
      if (e.currentTarget.src !== fallback) {
        e.currentTarget.src = fallback
      } else {
        e.currentTarget.replaceWith(document.createTextNode('🧑‍💻'))
      }
    }}
  />
</p>
<p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">{site.bio}</p>
<div className="mt-6 flex gap-3">
<a
  href={site.cv}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Download my CV as PDF"
  className="rounded-full ring-1 ring-slate-300 dark:ring-slate-700 px-5 py-2.5
             transition duration-200 ease-out transform-gpu
             hover:bg-brand-600 hover:text-white hover:ring-brand-600
             dark:hover:bg-brand-500 dark:hover:ring-brand-500
             hover:shadow-lg hover:shadow-brand-600/25
             -translate-y-0 hover:-translate-y-0.5 active:translate-y-0
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
>
  Download CV
</a>
</div>
</motion.div>
<motion.div
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6, delay: 0.1 }}
className="flex justify-center"
>
<img src="/profile.jpg" alt="Profile" className="h-40 w-40 md:h-56 md:w-56 rounded-full ring-2 ring-brand-400 object-cover" onError={(e) => ((e.currentTarget.src = 'https://placehold.co/224'))} />
</motion.div>
</div>
<div className="mt-12" aria-hidden="true">
  <div className="section-divider" />
  </div>
</Container>
</section>
)
}
