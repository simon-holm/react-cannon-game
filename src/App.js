import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getCanvasPosition } from './utils/formulas'

import Canvas from './components/Canvas'
import Sky from './components/Sky'
import Ground from './components/Ground'
import CannonPipe from './components/CannonPipe'
import CannonBase from './components/CannonBase'
import CannonBall from './components/CannonBall'
import CurrentScore from './components/CurrentScore'
import FlyingObject from './components/FlyingObject'
import Heart from './components/Heart'
import StartGame from './components/StartGame'
import Title from './components/Title'

class App extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.moveObjects(this.canvasMousePosition)
    }, 10)

    window.onresize = () => {
      const cnv = document.getElementById('cannon-game-canvas')
      cnv.style.width = `${window.innerWidth}px`
      cnv.style.height = `${window.innerHeight}px`
    }
    window.onresize()
  }

  trackMouse = event => {
    this.canvasMousePosition = getCanvasPosition(event)
  }

  render() {
    return (
      <Canvas trackMouse={event => this.trackMouse(event)}>
        <Sky />
        <Title />
        <Ground />
        <CannonPipe rotation={this.props.angle} />
        <CannonBase />
        <CannonBall position={{ x: 0, y: -100 }} />
        <CurrentScore score={10} />
        <FlyingObject position={{ x: -150, y: -300 }} />
        <FlyingObject position={{ x: 180, y: -500 }} />
        <Heart position={{ x: -300, y: 35 }} />
        <StartGame onClick={() => alert('ITS WORKING')} />
      </Canvas>
    )
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired
}

export default App
