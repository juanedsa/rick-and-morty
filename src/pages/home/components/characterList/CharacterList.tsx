import { Character, CharacterProps } from '../character/Character'

import './CharacterList.css'

type CharacterListProps = {
  characters: CharacterProps[]
}

function CharacterList({ characters }: CharacterListProps) {
  return (
    <section className="character-list">
      {characters.map(({ id, name, image, status, species, origin }) => (
        <Character
          key={id}
          id={id}
          name={name}
          image={image}
          status={status}
          species={species}
          origin={origin}
        />
      ))}
    </section>
  )
}

export { CharacterList }
