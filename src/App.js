import React, { Component } from 'react'

import Canvas from './components/Canvas'
import Sky from './components/Sky'
import Ground from './components/Ground'

class App extends Component {
  render() {
    return (
      <Canvas>
        <Sky />
        <Ground />
      </Canvas>
    )
  }
}

export default App
