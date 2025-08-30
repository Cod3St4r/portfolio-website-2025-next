import Navbar from "./components/Navbar"
import GridBackground from "./components/GridBackground"
import Hero from "./sections/Hero"
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

// import Skills from './sections/Skills'


// import Contact from './sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <GridBackground />
        <section id="hero"> <Hero /> </section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
         <section id="contact"><Contact /></section>
        {/* <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        */}
      </main>
    </>
  );
}
