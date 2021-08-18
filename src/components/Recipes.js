import React,{useContext} from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Recipes(props) {
    const {deleteRecipe, handleRecipeSelect} = useContext(RecipeContext)
    const{
        id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients,
    }=props
    return (
      <div>
          <div className="row">
            <div className="col"><h3>{name}</h3></div>
            
            <div className="col">
                <button className="btn btn-success" onClick={()=>handleRecipeSelect(id)}>Edit</button>
                <button className="btn btn-warning" onClick={()=>deleteRecipe(id)}>Delete</button>
            </div>
          </div>
          <div>
              <span>Cook Time:</span>
              <span>{cookTime}</span>
          </div>
          <div>
              <span>Servings:</span>
              <span>{servings}</span>
          </div>
          <div>
              <span>Instructions:</span>
              <div style={{whiteSpace:"pre-wrap"}}><span>{instructions}</span></div>
          </div>
          <div>
              <span>Ingredients:</span>
              <span><IngredientList ingredients={ingredients}/></span>
          </div>
          
      </div>
    )
}
