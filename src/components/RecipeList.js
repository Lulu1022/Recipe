import React, {useContext} from 'react'
import Recipes from './Recipes.js'
import { RecipeContext } from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function RecipeList({recipes}) {
    const {handleRecipeAdd} = useContext(RecipeContext)
    return (
       <div className="col recipe-list">
        <div>
            {recipes.map(recipe=>{return (<Recipes key={recipe.id} {...recipe}/>)})}
        </div>
        <div>
            <button className="btn btn-primary" onClick={handleRecipeAdd}>Add Recipe</button>
        </div>        
       </div>
    )
}
