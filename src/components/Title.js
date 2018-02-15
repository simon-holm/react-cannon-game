import React from 'react'
import { pathFromBezierCurve } from '../utils/formulas'

const Title = () => {
  const textStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 120,
    fill: '#cbca62'
  }

  const reactTitleLineCurve = {
    initialAxis: {
      x: -190,
      y: -950
    },
    initialControlPoint: {
      x: 95,
      y: -50
    },
    endingControlPoint: {
      x: 285,
      y: -50
    },
    endingAxis: {
      x: 380,
      y: 0
    }
  }

  const cannonGameLineCurve = {
    ...reactTitleLineCurve,
    initialAxis: {
      x: -250,
      y: -780
    },
    initialControlPoint: {
      x: 125,
      y: -90
    },
    endingControlPoint: {
      x: 375,
      y: -90
    },
    endingAxis: {
      x: 500,
      y: 0
    }
  }

  return (
    <g filter="url(#shadow)">
      <defs>
        <path
          id="ReactTitlePath"
          d={pathFromBezierCurve(reactTitleLineCurve)}
        />
        <path
          id="CannonGamePath"
          d={pathFromBezierCurve(cannonGameLineCurve)}
        />
      </defs>
      <text {...textStyle}>
        <textPath xlinkHref="#ReactTitlePath">React,</textPath>
      </text>
      <text {...textStyle}>
        <textPath xlinkHref="#CannonGamePath">SVG Game</textPath>
      </text>
    </g>
  )
}

export default Title
