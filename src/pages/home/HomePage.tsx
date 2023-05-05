import { CharacterList } from './components/characterList/CharacterList'

import './Home.css'

import useCharacters from '../../hooks/useCharacters'
import { useState } from 'react'
import Pager from './components/pager/Pager'

function HomePage() {
  const [page, setPage] = useState<number>(1)
  const { characters, info } = useCharacters(page)

  return (
    <>
      <Pager page={page} setPage={setPage} info={info} />
      <CharacterList characters={characters} />
    </>
  )
}

export { HomePage }
