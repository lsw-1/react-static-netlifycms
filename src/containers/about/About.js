import React from 'react'
import anime from 'animejs'
import './About.css'

class About extends React.Component {
  componentDidMount () {
    anime({
      targets: '.about-content',
      translateX: 500,
      easing: 'linear',
      duration: 1500,
    })
  }

  render () {
    return (
      <div className="background">
        <div className="about-image">
          <div className="about-content">
            <h1>Creative Innovation</h1>
            <p>Work in progress...</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
