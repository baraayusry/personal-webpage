import ThemeToggle from '@/components/ThemeToggle'
import Container from '@/components/Container'


const links = [
{ href: '#about', label: 'About' },
{ href: '#skills', label: 'Skills' },
{ href: '#experience', label: 'Experience' },
{ href: '#projects', label: 'Projects' },
{ href: '#publications', label: 'Publications' },
{ href: '#contact', label: 'Contact' }
]


export default function Navbar() {
return (
<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-200/70 dark:border-slate-800/70">
<Container>
<nav className="flex items-center justify-between h-16">
<a href="#home" className="font-semibold text-lg">Your Name</a>
<div className="flex items-center gap-4">
<ul className="hidden md:flex items-center gap-6 text-sm">
{links.map((l) => (
<li key={l.href}>
<a className="hover:text-brand-600" href={l.href}>{l.label}</a>
</li>
))}
</ul>
<ThemeToggle />
</div>
</nav>
</Container>
</header>
)
}