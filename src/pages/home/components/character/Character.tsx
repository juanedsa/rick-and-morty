import { useNavigate } from 'react-router-dom'

import './Character.css'

export type CharacterProps = {
  id: number
  name: string
  image: string
  status: string
  species: string
  origin: { name: string }
}

function Character({
  id,
  name,
  image,
  status,
  species,
  origin
}: CharacterProps) {
  const navigate = useNavigate()

  const gotoDetail = () => {
    navigate(`/detail/${id}`)
  }

  return (
    <article key={id} className="character" onClick={gotoDetail}>
      <img className="character__image" src={image} alt={`image of ${name}`} />
      <div className="character__info">
        <span className="info__name">{name}</span>
        <span>
          {status} - {species}
        </span>
        <div className="info__origin">
          <span className="origin__title">Origin:</span>
          <span>{origin.name}</span>
        </div>
      </div>
    </article>
  )
}

export { Character }
