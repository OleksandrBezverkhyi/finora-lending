import './App.css'
import { ContactSection } from './components/ContactSection.jsx'
import { ContentSection } from './components/ContentSection.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { SiteHeader } from './components/SiteHeader.jsx'
import { landingContent, navigationItems } from './data/siteContent.js'

function App() {
  const { hero, about, goals, methodology, results, contacts } = landingContent

  return (
    <>
      <SiteHeader navigationItems={navigationItems} />

      <main>
        <HeroSection {...hero} />
        <ContentSection {...about} />
        <ContentSection {...goals} />
        <ContentSection {...methodology} />
        <ContentSection {...results} />
        <ContactSection {...contacts} />
      </main>

      <footer>
        <p>Finora project landing page.</p>
      </footer>
    </>
  )
}

export default App
