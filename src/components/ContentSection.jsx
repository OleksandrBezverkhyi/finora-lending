export function ContentSection({ id, title, description, items }) {
  const isAboutSection = id === 'about'

  return (
    <section className={isAboutSection ? 'about-section' : undefined} id={id}>
      <h2 className={isAboutSection ? 'about-section__title' : undefined}>
        {title}
      </h2>
      <p className={isAboutSection ? 'about-section__description' : undefined}>
        {description}
      </p>

      {items?.length ? (
        <ul className={isAboutSection ? 'about-section__list' : undefined}>
          {items.map((item) => (
            <li className={isAboutSection ? 'about-section__item' : undefined} key={item}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
