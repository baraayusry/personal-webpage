import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import Skills from '@/sections/Skills'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Publications from '@/sections/Publications'
import Contact from '@/sections/Contact'
import Education from './sections/Education'


export default function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Publications />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
