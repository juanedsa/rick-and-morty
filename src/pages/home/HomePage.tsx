import { CharacterList } from './components/characterList/CharacterList'

import './Home.css'

import useCharacters from '../../hooks/useCharacters'
import { useState } from 'react'
import { Pager } from './components/pager/Pager'
import { SearchBar } from './components/searchBar/SearchBar'
import { Loading } from '../../shared/components/loading/Loading'

function HomePage() {
  const [page, setPage] = useState<number>(1)
  const [name, setName] = useState<string>('')

  const { characters, info, isLoading } = useCharacters(page, name)

  return (
    <>
      <SearchBar setName={setName} setPage={setPage} />
      {info && characters ? (
        <>
          <Pager page={page} setPage={setPage} info={info} />
          {isLoading && <Loading />}
          {!isLoading && <CharacterList characters={characters} />}
        </>
      ) : (
        <span>There is nothing here !</span>
      )}
    </>
  )
}

export { HomePage }
