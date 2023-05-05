import './Pager.css'

type PagerProps = {
  page: number
  setPage: any
  info: InfoModel
}

function Pager({ page, setPage, info }: PagerProps) {
  const { prev, next, pages } = info

  return (
    <div className="pager">
      <section className="pager__page">Current Page: {page} of {pages}</section>
      <section className="pager__buttons">
        <button
          className="button"
          onClick={() => setPage(page - 1)}
          disabled={!prev}
        >
          Prev
        </button>
        <button
          className="button"
          onClick={() => setPage(page + 1)}
          disabled={!next}
        >
          Next
        </button>
      </section>
    </div>
  )
}

export default Pager
