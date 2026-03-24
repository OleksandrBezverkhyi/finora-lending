export function SiteHeader({ navigationItems }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#hero">
          Finora
        </a>

        <nav className="site-header__nav" aria-label="Основна навігація">
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
      </div>
    </header>
  )
}
