import React, { useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit'
import { v4 as uuidv4 } from 'uuid'
import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {   
    const[selectedRecipeId, setSelectedRecipeId] = useState()
    const [recipes, setRecipes] = useState(sampleRecipes)
    const selectedRecipe = recipes.find(recipe=>recipe.id===selectedRecipeId)

    useEffect(()=>{
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
        if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
    } 
    ,[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    }, [recipes])

    const recipeContextValue = {
        handleRecipeAdd, 
        deleteRecipe,
        handleRecipeSelect,
        handleRecipeChange
    }

    function handleRecipeChange(id,recipe){
        const newRecipes = [...recipes]
        const index = newRecipes.findIndex(r=>r.id===id)
        newRecipes[index] = recipe
        setRecipes(newRecipes)
    }

    function handleRecipeSelect(id){
        setSelectedRecipeId(id)
    }

    function handleRecipeAdd() {
        const newRecipe = {
            id: uuidv4(),
            name: '',
            serevings: '',
            cookTime: '',
            instructions: '',
            ingredients: [
                { id: uuidv4, name: '', amount: '' }
            ]
        }
        setSelectedRecipeId(newRecipe.id)
        setRecipes([...recipes, newRecipe])
    }

    function deleteRecipe(id) {
      if(selectedRecipeId != null && selectedRecipeId === id){
          setSelectedRecipeId(undefined)
      }
      setRecipes(recipes.filter(recipe => recipe.id !== id))
    }

    return (
    <RecipeContext.Provider value={recipeContextValue}>
        <div className="row">
        <RecipeList recipes={recipes} />
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
        </div>

    </RecipeContext.Provider>
    )
}

    const sampleRecipes=[
        {
            id:1,
            name:'Bubble tea',
            servings:3,
            cookTime:'1:45',
            instructions:'1. Make the boba\n2. Bring 8 cups water to a boil over high heat\n3. Add the pearls',
            ingredients:[
                {
                id:1,
                name:'Black tea',
                amount: '8 bags'
                },
                {
                id:2,
                name:'Tapioca pearls',
                amount: '3/4 cup'
                }
            ]
        },
        {
            id:2,
            name:'Matcha green tea',
            servings:5,
            cookTime:'0:45',
            instructions:' 1. Sift 1-2 tsp matcha into a cup using a small sifter.\n2. Add 2oz hot water. For best results use water just under a boil.\n3. Whisk vigorously in a zig zag motion until the tea is frothy.',
            ingredients:[
            {
            id:1,
            name:'Matcha',
            amount: '2 tsp'
            },
            {
            id:2,
            name:'Hot water',
            amount: '2 oz'
            }
            ]
        }
    ]
export default App;