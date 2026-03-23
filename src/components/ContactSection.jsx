export function ContactSection({ id, title, description, links }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <p>{description}</p>

      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <strong>{link.label}:</strong>{' '}
            <a href={link.href}>{link.value}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
