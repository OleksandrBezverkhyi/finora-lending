import { useEffect, useState } from 'react'
import './App.css'
import { ContactSection } from './components/ContactSection.jsx'
import { ContentSection } from './components/ContentSection.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { SiteHeader } from './components/SiteHeader.jsx'
import {
  defaultLocale,
  localizedSiteContent,
  supportedLocales,
} from './data/siteContent.js'

function getInitialLocale() {
  if (typeof window === 'undefined') {
    return defaultLocale
  }

  const storedLocale = window.localStorage.getItem('finora-locale')

  if (storedLocale && supportedLocales.includes(storedLocale)) {
    return storedLocale
  }

  const browserLocale = window.navigator.language?.slice(0, 2)?.toLowerCase()

  if (browserLocale && supportedLocales.includes(browserLocale)) {
    return browserLocale
  }

  return defaultLocale
}

function App() {
  const [locale, setLocale] = useState(getInitialLocale)
  const content = localizedSiteContent[locale]
  const { ui, navigationItems, hero, about, goals, methodology, results, contacts, footer } =
    content

  useEffect(() => {
    window.localStorage.setItem('finora-locale', locale)
    document.documentElement.lang = ui.locale
    document.title = ui.meta.title

    const descriptionTag = document.querySelector('meta[name="description"]')

    if (descriptionTag) {
      descriptionTag.setAttribute('content', ui.meta.description)
    }
  }, [locale, ui])

  return (
    <>
      <a className="skip-link" href="#main-content">
        {ui.skipLink}
      </a>

      <div className="page-shell">
        <SiteHeader
          brandAriaLabel={ui.brandAriaLabel}
          languageButtonLabels={ui.languageButtonLabels}
          languageSwitcherLabel={ui.languageSwitcherLabel}
          languages={ui.languages}
          locale={locale}
          logoAlt={ui.logoAlt}
          navigationItems={navigationItems}
          navAriaLabel={ui.navAriaLabel}
          onLocaleChange={setLocale}
        />

        <main className="page-main" id="main-content" tabIndex="-1">
          <HeroSection actionsAriaLabel={ui.mainActionsAriaLabel} {...hero} />
          <ContentSection {...about} />
          <ContentSection {...goals} />
          <ContentSection {...methodology} />
          <ContentSection {...results} />
          <ContactSection {...contacts} />
        </main>

        <footer className="site-footer" aria-label={ui.footerAriaLabel}>
          <div className="site-footer__inner">
            <p className="site-footer__title">{footer.title}</p>
            <p className="site-footer__text">{footer.text}</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
