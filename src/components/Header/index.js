import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Header = () => {
  const renderPopupContent = close => (
    <ul className="popup-menu-list">
      <li className="menu-item">
        <Link to="/" className="menu-link" onClick={() => close()}>
          <AiFillHome size="35" />
          <p className="link-content">Home</p>
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/about" className="menu-link" onClick={() => close()}>
          <BsInfoCircleFill size="35" />
          <p className="link-content">About</p>
        </Link>
      </li>
    </ul>
  )

  const renderMenuButton = () => (
    <button
      data-testid="hamburgerIconButton"
      className="menu-button"
      type="button"
    >
      <GiHamburgerMenu size="30" />
    </button>
  )

  return (
    <nav className="nav-container">
      <div className="nav-elements-container">
        <Link to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
          />
        </Link>
        <Popup modal trigger={renderMenuButton()} className="popup-content">
          {close => (
            <div className="modal-container">
              <button
                onClick={() => close()}
                className="close-button"
                data-testid="closeButton"
                type="button"
              >
                <IoMdClose size="30" color="#616e7c" />
              </button>
              {renderPopupContent(close)}
            </div>
          )}
        </Popup>
      </div>
    </nav>
  )
}

export default Header
