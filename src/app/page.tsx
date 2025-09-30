import Navbar from "./components/Navbar"
import GridBackground from "./components/GridBackground"
import Hero from "./sections/Hero"
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import { Metadata } from 'next'

// import Skills from './sections/Skills'
// import Contact from './sections/Contact'

export const metadata: Metadata = {
  title: "Portfolio | Carlos Gabriel Mercado Jimenez",
  description: "Explore my portfolio showcasing full-stack web development projects, game development work, and creative technology solutions. Computer science graduate with expertise in React, Next.js, and modern web technologies.",
  openGraph: {
    title: "Portfolio | Carlos Gabriel Mercado Jimenez",
    description: "Explore my portfolio showcasing full-stack web development projects, game development work, and creative technology solutions.",
    url: "https://your-domain.com",
    type: "website",
  },
}

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Carlos Gabriel Mercado Jimenez",
  "jobTitle": "Full Stack Developer",
  "description": "Computer science graduate specializing in full-stack web development, game development, and creative technology solutions",
  "url": "https://your-domain.com",
  "sameAs": [
    "https://github.com/Cod3St4r", // Update with your actual GitHub
    "https://linkedin.com/in/your-linkedin", // Update with your LinkedIn
    // Add other social profiles
  ],
  "knowsAbout": [
    "Web Development",
    "Game Development", 
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Full Stack Development"
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Your University Name" // Update with your actual university
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <GridBackground />
        <section id="hero"> <Hero /> </section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
         <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
