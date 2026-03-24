export function HeroSection({ id, titleUa, titleEn, description, actions }) {
  return (
    <section id={id} className="hero-section">
      <div className="hero-content">
        <p className="hero-kicker">Проєкт Finora</p>
        <h1 className="hero-title">{titleUa}</h1>
        <p className="hero-subtitle">{titleEn}</p>
        <p className="hero-description">{description}</p>

        <div className="hero-actions">
          {actions.map((action, index) => (
            <a
              key={action.href}
              className={index === 0 ? 'hero-link hero-link-primary' : 'hero-link'}
              href={action.href}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
