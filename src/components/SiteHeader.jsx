import logoSumdu from '../assets/logo_sumdu.svg'

export function SiteHeader({ navigationItems }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          aria-label="Finora — перейти до початку сторінки"
          className="site-header__brand"
          href="#hero"
        >
          <img
            className="site-header__logo"
            src={logoSumdu}
            alt="Логотип СумДУ"
            width="36"
            height="36"
          />
          <span className="site-header__brand-text">Finora</span>
        </a>

        <nav className="site-header__nav" aria-label="Основна навігація">
          <ul className="site-header__list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  aria-label={`Перейти до секції ${item.label}`}
                  className="site-header__link"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
