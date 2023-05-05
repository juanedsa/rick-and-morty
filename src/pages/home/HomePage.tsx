import { CharacterList } from './components/characterList/CharacterList'

import './Home.css'

import useCharacters from '../../hooks/useCharacters'
import { useState } from 'react'

function HomePage() {
  const [page, setPage] = useState<number>(1)
  const { characters, info } = useCharacters(page)
  const { prev, next } = info

  return (
    <>
      <section className="page">Current Page: {page}</section>
      <section className="buttons">
        <button
          className="buttons__paginator"
          onClick={() => setPage(page - 1)}
          disabled={!prev}
        >
          Prev
        </button>
        <button
          className="buttons__paginator"
          onClick={() => setPage(page + 1)}
          disabled={!next}
        >
          Next
        </button>
      </section>
      <CharacterList characters={characters} />
    </>
  )
}

export { HomePage }
