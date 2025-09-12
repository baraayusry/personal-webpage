import Container from '@/components/Container'
import { site } from '@/data/site'


export default function Footer() {
return (
<footer className="section-y items-center text-center bg-slate-100 dark:bg-slate-900">
<div className="section-divider mb-8" aria-hidden="true" />
<Container>
<div className="flex flex-col sm:flex-row items-center justify-center text-center gap-4 text-sm text-slate-600 dark:text-slate-400">
<p>© {new Date().getFullYear()} {site.name}</p>
</div>
</Container>
</footer>
)
}
