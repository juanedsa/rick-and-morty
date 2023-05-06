
import './Header.css'

function Header() {
  return (
    <figure className="header">
      <img className='header__image' src="/src/assets/logo.png" alt="Descripción de la imagen" />
      <figcaption>Author: Juan Salazar</figcaption>
    </figure>
  )
}

export { Header }
