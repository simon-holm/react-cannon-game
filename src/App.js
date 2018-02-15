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

class App extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.moveObjects(this.canvasMousePosition)
    }, 10)
  }

  trackMouse = event => {
    this.canvasMousePosition = getCanvasPosition(event)
  }

  render() {
    return (
      <Canvas trackMouse={event => this.trackMouse(event)}>
        <Sky />
        <Ground />
        <CannonPipe rotation={this.props.angle} />
        <CannonBase />
        <CannonBall position={{ x: 0, y: -100 }} />
        <CurrentScore score={10} />
      </Canvas>
    )
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired
}

export default App
