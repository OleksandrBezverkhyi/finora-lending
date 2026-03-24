export function ContactSection({ id, title, description, links }) {
  return (
    <section className="contacts-section" id={id}>
      <h2 className="contacts-section__title">{title}</h2>
      <p className="contacts-section__description">{description}</p>

      <ul className="contacts-section__list">
        {links.map((link) => (
          <li className="contacts-section__item" key={link.label}>
            <span className="contacts-section__label">{link.label}</span>
            <a className="contacts-section__link" href={link.href}>
              {link.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
