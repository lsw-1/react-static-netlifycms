import React from 'react'
import { Link } from 'react-static'
import anime from 'animejs'

import './Navbar.css'
import icon from '../../assets/menu-icon.svg'

export const Navbar = class extends React.Component {
  componentDidMount () {
    anime({
      targets: '.icon',
      backgroundColor: '#fff',
      easing: 'linear',
      duration: 2000,
      loop: true,
      direction: 'alternate',
      delay: 3000,
    })
  }

  render () {
    return (
      <nav>
        <img className="icon" src={icon} alt="" />
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>
    )
  }
}
