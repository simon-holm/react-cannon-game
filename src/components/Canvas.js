import React from 'react'
import PropTypes from 'prop-types'

const Canvas = ({ children, trackMouse }) => {
  const gameHeight = 1200
  const viewBox = [
    window.innerWidth / -2,
    100 - gameHeight,
    window.innerWidth,
    gameHeight
  ]

  return (
    <svg
      id="cannon-game-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
      onMouseMove={trackMouse}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      {children}
    </svg>
  )
}

Canvas.propTypes = {
  trackMouse: PropTypes.func.isRequired
}

export default Canvas
