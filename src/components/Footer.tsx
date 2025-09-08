import Container from '@/components/Container'


export default function Footer() {
return (
<footer className="section-y">
<Container>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
<p>© {new Date().getFullYear()} Your Name</p>
<div className="flex items-center gap-4">
<a href="https://github.com/yourname" className="hover:text-brand-600">GitHub</a>
<a href="https://www.linkedin.com/in/yourname" className="hover:text-brand-600">LinkedIn</a>
<a href="#">CV</a>
</div>
</div>
</Container>
</footer>
)
}