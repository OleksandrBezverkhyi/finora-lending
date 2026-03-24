import heroImage from '../assets/hero-finora.svg'

export function HeroSection({
  id,
  kicker,
  title,
  subtitle,
  description,
  actions,
  actionsAriaLabel,
}) {
  const titleId = `${id}-title`
  const subtitleId = `${id}-subtitle`
  const descriptionId = `${id}-description`

  return (
    <section
      aria-describedby={`${subtitleId} ${descriptionId}`}
      aria-labelledby={titleId}
      className="hero-section"
      id={id}
    >
      <div className="hero-content">
        <figure aria-hidden="true" className="hero-background">
          <div className="hero-visual">
            <img className="hero-image" loading="eager" src={heroImage} alt="" />
          </div>
        </figure>

        <div className="hero-copy">
          <p className="hero-kicker">{kicker}</p>
          <h1 className="hero-title" id={titleId}>
            {title}
          </h1>
          <p className="hero-subtitle" id={subtitleId}>
            {subtitle}
          </p>
          <p className="hero-description" id={descriptionId}>
            {description}
          </p>

          <div className="hero-actions" aria-label={actionsAriaLabel}>
            {actions.map((action, index) => (
              <a
                aria-label={action.label}
                className={index === 0 ? 'hero-link hero-link-primary' : 'hero-link'}
                href={action.href}
                key={action.href}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
