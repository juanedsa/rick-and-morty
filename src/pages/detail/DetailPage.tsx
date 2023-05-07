import { useParams } from 'react-router-dom'
import { Loading } from '../../shared/components/loading/Loading'
import { Detail } from './components/detail/Detail'
import { MostRecents } from './components/mostRecents/MostRecents'

import useDetail from '../../hooks/useDetail'

function DetailPage() {
  const { id } = useParams()

  const { detail, isLoading } = useDetail(id ?? '')

  return (
    <>
      {detail?.error ? (
        <span>Character not found !</span>
      ) : (
        <>
          {isLoading && <Loading />}
          {!isLoading && <Detail detail={detail} />}
          <MostRecents recent={detail} />
        </>
      )}
    </>
  )
}

export { DetailPage }
