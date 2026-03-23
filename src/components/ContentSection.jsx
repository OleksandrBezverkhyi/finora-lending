export function ContentSection({ id, title, description, items }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <p>{description}</p>

      {items?.length ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
