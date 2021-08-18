import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Ingredients(props) {
    const{
        name,
        amount
    }=props
    return (
    <div className="row">
      <div className="col col-lg-2">{name}</div>
      <div className="col col-lg-2">{amount}</div>
    </div>

    )
}
