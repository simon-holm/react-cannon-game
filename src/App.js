import React, { Component } from 'react'

import Canvas from './components/Canvas'
import Sky from './components/Sky'
import Ground from './components/Ground'
import CannonPipe from './components/CannonPipe'
import CannonBase from './components/CannonBase'

class App extends Component {
  render() {
    return (
      <Canvas>
        <Sky />
        <Ground />
        <CannonPipe rotation={45} />
        <CannonBase />
      </Canvas>
    )
  }
}

export default App
