import { useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }
  
  return (
    <figure className="header" onClick={goToHome}>
      <img
        className="header__image"
        src="/src/assets/logo.png"
        alt="Header de la Pagina"
      />
      <figcaption>Author: Juan Salazar</figcaption>
    </figure>
  )
}

export { Header }
