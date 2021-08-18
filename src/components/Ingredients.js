import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Ingredients(props) {
    const{
        name,
        amount
    }=props
    return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>

    )
}
