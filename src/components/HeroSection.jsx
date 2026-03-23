export function HeroSection({ id, titleUa, titleEn, description, actions }) {
  return (
    <section id={id}>
      <p>Проєкт Finora</p>
      <h1>{titleUa}</h1>
      <p>{titleEn}</p>
      <p>{description}</p>

      <div>
        {actions.map((action) => (
          <a key={action.href} href={action.href}>
            {action.label}
          </a>
        ))}
      </div>
    </section>
  )
}
