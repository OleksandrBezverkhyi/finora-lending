export function SiteHeader({ navigationItems }) {
  return (
    <header>
      <p>Finora</p>

      <nav aria-label="Основна навігація">
        <ul>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
