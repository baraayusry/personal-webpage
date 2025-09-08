import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Publications from '@/sections/Publications'
import Contact from '@/sections/Contact'


export default function App() {
return (
<div className="min-h-screen">
<Navbar />
<main>
<Hero />
<About />
<Skills />
<Experience />
<Projects />
<Publications />
<Contact />
</main>
<Footer />
</div>
)
}