export function ContentSection({ id, title, description, items }) {
  const isAboutSection = id === 'about'
  const isGoalsSection = id === 'goals'
  const isMethodologySection = id === 'methodology'
  const isResultsSection = id === 'results'

  const sectionClassName = isAboutSection
    ? 'about-section'
    : isGoalsSection
      ? 'goals-section'
      : isMethodologySection
        ? 'methodology-section'
        : isResultsSection
          ? 'results-section'
          : undefined

  const titleClassName = isAboutSection
    ? 'about-section__title'
    : isGoalsSection
      ? 'goals-section__title'
      : isMethodologySection
        ? 'methodology-section__title'
        : isResultsSection
          ? 'results-section__title'
          : undefined

  const descriptionClassName = isAboutSection
    ? 'about-section__description'
    : isGoalsSection
      ? 'goals-section__description'
      : isMethodologySection
        ? 'methodology-section__description'
        : isResultsSection
          ? 'results-section__description'
          : undefined

  const listClassName = isAboutSection
    ? 'about-section__list'
    : isGoalsSection
      ? 'goals-section__list'
      : isMethodologySection
        ? 'methodology-section__list'
        : isResultsSection
          ? 'results-section__list'
          : undefined

  const itemClassName = isAboutSection
    ? 'about-section__item'
    : isGoalsSection
      ? 'goals-section__item'
      : isMethodologySection
        ? 'methodology-section__item'
        : isResultsSection
          ? 'results-section__item'
          : undefined

  const titleId = `${id}-title`
  const descriptionId = `${id}-description`
  const ListTag = isGoalsSection ? 'ol' : 'ul'

  return (
    <section
      aria-describedby={descriptionId}
      aria-labelledby={titleId}
      className={sectionClassName}
      id={id}
    >
      <h2 className={titleClassName} id={titleId}>
        {title}
      </h2>
      <p className={descriptionClassName} id={descriptionId}>
        {description}
      </p>

      {items?.length ? (
        <ListTag className={listClassName}>
          {items.map((item) => (
            <li className={itemClassName} key={item}>
              {item}
            </li>
          ))}
        </ListTag>
      ) : null}
    </section>
  )
}
