import { useEffect, useState } from 'react'
import { CharacterModel } from '../../../../models/character.model'

import './MostRecents.css'
import { useNavigate } from 'react-router-dom'

type MostRecentsProps = {
  recent: CharacterModel | undefined
}

function MostRecents({ recent }: MostRecentsProps) {
  const [items, setItems] = useState<Array<CharacterModel>>([])
  const navigate = useNavigate()

  useEffect(() => {
    const itemsLS = JSON.parse(localStorage.getItem('MOST_RECENTS') ?? '[]')

    if (itemsLS) {
      setItems(itemsLS)
    }
  }, [])

  useEffect(() => {
    if (recent) {
      setItems((prevState) => {
        const itemsFiltered = prevState.filter((item) => item.id !== recent.id)

        return [recent, ...itemsFiltered]
      })
    }
  }, [recent])

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('MOST_RECENTS', JSON.stringify(items.slice(0, 5)))
    }
  }, [items])

  const showMostRecent = (id: number) => {
    navigate(`/detail/${id}`)
  }

  return (
    <section className="most-recents">
      <p className="most-recents__title">Most Recents</p>
      <div className="most-recents__container">
        {items.slice(0, 5).map((item) => (
          <img
            onClick={() => showMostRecent(item?.id)}
            className="most-recent__character"
            src={item?.image}
            alt={item?.name}
          />
        ))}
      </div>
    </section>
  )
}

export { MostRecents }
