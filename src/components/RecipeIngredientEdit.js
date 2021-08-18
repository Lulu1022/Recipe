import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function RecipeIngredientEdit(props) {
  const{ingredient,
    handleIngredientChange,
    handleIngredietDelete} = props
  
  function handleChange(changes){
    handleIngredientChange(ingredient.id,{...ingredient,...changes})
  }
    return (
        <div className="row">
          <div className="col"><input type="text" value={ingredient.name} onInput={(e)=>handleChange({name:e.target.value})}/></div>
          <div className="col"><input type="text" value={ingredient.amount} onInput={(e)=>handleChange({amount:e.target.value})}/></div>
          <div className="col"><button onClick={()=>handleIngredietDelete(ingredient.id)}>&times;</button></div>
        </div>
    )
}
