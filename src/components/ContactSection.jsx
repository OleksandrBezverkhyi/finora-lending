export function ContactSection({ id, title, description, links }) {
  const titleId = `${id}-title`
  const descriptionId = `${id}-description`

  return (
    <section
      aria-describedby={descriptionId}
      aria-labelledby={titleId}
      className="contacts-section"
      id={id}
    >
      <h2 className="contacts-section__title" id={titleId}>
        {title}
      </h2>
      <p className="contacts-section__description" id={descriptionId}>
        {description}
      </p>

      <ul className="contacts-section__list">
        {links.map((link) => (
          <li className="contacts-section__item" key={link.label}>
            <span className="contacts-section__label">{link.label}</span>
            <a
              aria-label={`${link.label}: ${link.value}`}
              className="contacts-section__link"
              href={link.href}
            >
              {link.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
