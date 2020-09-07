import React, { Component } from 'react'
import logo from '../images/logo.svg'
import {FaAlignCenter} from 'react-icons/fa'
import {Link} from 'react-router-dom'

class NavBar extends Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const {isOpen} = this.state;
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort"/>
            </Link>
            <button type="button" 
                    className="nav-btn"
                    onClick={this.handleToggle}>
              <FaAlignCenter className="nav-icon"/>
            </button>
          </div>
          <ul className={isOpen ? 'nav-link show-nav' : 'nav-link'}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar

