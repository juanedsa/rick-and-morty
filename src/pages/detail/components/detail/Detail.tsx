import { CharacterModel } from '../../../../models/character.model'

import './Detail.css'

type DetailProps = {
  detail: CharacterModel | undefined
}

function Detail({ detail }: DetailProps) {
  return (
    <section className="detail">
      <img
        className="detail__image"
        src={detail?.image}
        alt={`Image of ${detail?.name}`}
      />
      <div className="detail__info">
        <span className="info__name">{detail?.name}</span>
        <span className="info__normal">ID: {detail?.id}</span>
        <span className="info__normal">Status: {detail?.status}</span>
        <span className="info__normal">Species: {detail?.species}</span>
        <span className="info__normal">Type: {detail?.type}</span>
        <span className="info__normal">Gender: {detail?.gender}</span>
        <span className="info__normal">Origin: {detail?.origin.name}</span>
        <span className="info__normal">
          Location: {detail?.location.name} 📍
        </span>
        <span className="info__normal">
          Episodies: {detail?.episode.length} 🎬
        </span>
      </div>
    </section>
  )
}

export { Detail }
