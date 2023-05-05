import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <section className="error">
      <h2 className="error__title">Error 404</h2>
      <img
        className="error__image"
        src="/src/assets/rick-and-morty-404.png"
        alt="not found error"
      />
    </section>
  )
}

export { NotFoundPage }
