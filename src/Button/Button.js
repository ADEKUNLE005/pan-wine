import React from 'react'

function Button({title, handleclick,btnClass}) {
  return (
  <button onClick={handleclick} className={btnClass}>
    {title}
  </button>
  )
}

export default Button