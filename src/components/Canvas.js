import React from 'react'
import PropTypes from 'prop-types'

const Canvas = ({ children, trackMouse }) => {
  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight
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
