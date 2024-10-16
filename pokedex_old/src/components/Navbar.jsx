import { Logo } from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

const Navbar = () => {

  const sun = <FontAwesomeIcon icon={faSun} />
  const moon = <FontAwesomeIcon icon={faMoon} />
  
  return (
    <nav>
      <Logo/>
      <div className="switch">
      <span>{sun}</span>
        <label>
          <input type="checkbox" className="check-switch"/>
          <span className="slider"></span>
        </label>
        <span>{moon}</span>
      </div>
    </nav>
  )
}
export default Navbar;