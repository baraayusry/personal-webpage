import Container from '@/components/Container'
import { motion } from 'framer-motion'


export default function Hero() {
return (
<section id="home" className="section-y bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900">
<Container>
<div className="grid md:grid-cols-3 gap-8 items-center">
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="md:col-span-2"
>
<h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Your Name</h1>
<p className="mt-4 text-lg text-slate-700 dark:text-slate-300">Your role • Research/Focus areas • Short pitch about what you do.</p>
<div className="mt-6 flex gap-3">
<a href="#projects" className="rounded-full bg-brand-600 text-white px-5 py-2.5 hover:bg-brand-700">View Projects</a>
<a href="#contact" className="rounded-full ring-1 ring-slate-300 dark:ring-slate-700 px-5 py-2.5">Contact</a>
</div>
</motion.div>
<motion.div
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.6, delay: 0.1 }}
className="flex justify-center"
>
<img src="/profile.jpg" alt="Profile" className="h-40 w-40 md:h-56 md:w-56 rounded-full ring-2 ring-brand-400 object-cover" onError={(e) => ((e.currentTarget.src = 'https://via.placeholder.com/224'))} />
</motion.div>
</div>
</Container>
</section>
)
}