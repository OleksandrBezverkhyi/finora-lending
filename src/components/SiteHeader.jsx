import logoSumdu from '../assets/logo_sumdu.svg'

export function SiteHeader({
  navigationItems,
  locale,
  onLocaleChange,
  languages,
  languageSwitcherLabel,
  languageButtonLabels,
  navAriaLabel,
  brandAriaLabel,
  logoAlt,
}) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a aria-label={brandAriaLabel} className="site-header__brand" href="#hero">
          <img
            className="site-header__logo"
            src={logoSumdu}
            alt={logoAlt}
            width="36"
            height="36"
          />
          <span className="site-header__brand-text">Finora</span>
        </a>

        <div className="site-header__controls">
          <nav className="site-header__nav" aria-label={navAriaLabel}>
            <ul className="site-header__list">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a className="site-header__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="language-switcher" aria-label={languageSwitcherLabel} role="group">
            {Object.entries(languages).map(([languageKey, label]) => {
              const isActive = locale === languageKey

              return (
                <button
                  aria-label={languageButtonLabels[languageKey]}
                  aria-pressed={isActive}
                  className={
                    isActive
                      ? 'language-switcher__button language-switcher__button--active'
                      : 'language-switcher__button'
                  }
                  key={languageKey}
                  onClick={() => onLocaleChange(languageKey)}
                  type="button"
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
