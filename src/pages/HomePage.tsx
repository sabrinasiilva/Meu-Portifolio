import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export function HomePage() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
