import React from 'react'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <Div className="cs-text_widget" style={ containerStyles }>
      <img style={{height: 70}} src={logoSrc} alt={logoAlt} />
      <p>{text}</p>
    </Div>
  )
}
