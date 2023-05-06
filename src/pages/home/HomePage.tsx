import { CharacterList } from './components/characterList/CharacterList'

import './Home.css'

import useCharacters from '../../hooks/useCharacters'
import { useState } from 'react'
import { Pager } from './components/pager/Pager'
import { SearchBar } from './components/searchBar/SearchBar'

function HomePage() {
  const [page, setPage] = useState<number>(1)
  const [name, setName] = useState<string>('')

  const { characters, info, error } = useCharacters(page, name)

  return (
    <>
      <SearchBar setName={setName} />
      <Pager page={page} setPage={setPage} info={info} />
      {!error && <CharacterList characters={characters} />}
      {error && <span>Error Juan Solucionalo</span>}
    </>
  )
}

export { HomePage }
