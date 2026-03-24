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
      <a className="skip-link" href="#main-content">
        Перейти до основного вмісту
      </a>

      <div className="page-shell">
        <SiteHeader navigationItems={navigationItems} />

        <main className="page-main" id="main-content" tabIndex="-1">
          <HeroSection {...hero} />
          <ContentSection {...about} />
          <ContentSection {...goals} />
          <ContentSection {...methodology} />
          <ContentSection {...results} />
          <ContactSection {...contacts} />
        </main>

        <footer className="site-footer" aria-label="Нижній колонтитул сайту">
          <div className="site-footer__inner">
            <p className="site-footer__title">Finora</p>
            <p className="site-footer__text">
              Personal finance project landing page focused on income, expense,
              analytics, and budgeting workflows.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
