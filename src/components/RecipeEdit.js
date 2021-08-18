import React, {useContext} from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import { v4 as uuidv4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function RecipeEdit({recipe}) {
    const{handleRecipeChange,
        handleRecipeSelect} = useContext(RecipeContext)

    function handleChange(changes){
        handleRecipeChange(recipe.id,{...recipe, ...changes})
    }

    function handleIngredientChange(id,ingredient){
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(i=>i.id===id)
        newIngredients[index] = ingredient
        handleChange({ingredients: newIngredients})
    }
    
    function handleIngredientAdd(){
        const newIngredient={
            id:uuidv4(),
            name:'',
            amount:''
        }
        handleChange({ingredients: [...recipe.ingredients, newIngredient]})
    }

    function handleIngredietDelete(id){
        handleChange({ingredients: recipe.ingredients.filter( i => i.id !== id)})
    }

    return (
        <div className="col recipe-edit">
            <div  className="row close">
                <button onClick={()=>handleRecipeSelect(undefined)}>&times;</button>
            </div>

            <div>
                <div className="row right">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={recipe.name} onChange={e=>handleChange({name:e.target.value}) } /> 
                </div>

                <div className="row right">
                <label htmlFor="cookTime">Cook Time</label>
                <input type="text" name="cookTime" id="cookTime" value={recipe.cookTime} onChange={e=>handleChange({cookTime:e.target.value}) } /> 
                </div>

                <div className="row right">
                <label htmlFor="servings">Servings</label>
                <input type="text" min="1" name="servings" id="servings" value={recipe.servings} onChange={e=>handleChange({servings:parseInt(e.target.value) || ''}) }/> 
                </div>

                <div className="row right">
                <label htmlFor="instructions">Instructions</label>
                <textarea name="instructions" id="instructions" value={recipe.instructions} onChange={e=>handleChange({instructions:e.target.value}) }>
                    
                </textarea>
                </div>
            </div>

            <br />

            <label>Ingredients</label>
            <div className="row">
                <div className="col">Name</div>
                <div className="col">Amount</div>
                <div className="col"></div>
                <div></div>
                {recipe.ingredients.map(ingredient=>(
                    <RecipeIngredientEdit 
                    key={ingredient.id} 
                    handleIngredientChange={handleIngredientChange} 
                    handleIngredietDelete={handleIngredietDelete}
                    ingredient={ingredient}/>
                ))}
            </div>
               
            <div>
                <button className="btn btn-info add-ingredient" onClick={()=>handleIngredientAdd()}>Add Ingredients</button>
            </div>           
        </div>

    )
}
