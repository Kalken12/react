import React from 'react'

export default function TodoItems(props) {
    console.log("props",props);
    const {title} = props
  return (
    <h3>{title}</h3>
    <button>Delete Item</button>
  )
}
