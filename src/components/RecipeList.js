import React, { useContext } from 'react';
import Recipe from './recipe';
import { RecipeContext} from './App'

export default function RecipeList({ recipes }) {
    const { handleRecipeAdd } = useContext(RecipeContext);
        return (
        <>
        <div className='recipe-list'>
            <div>
                {recipes.map(recipie=>{
                    return (
                    <Recipe key = {recipie.id} {...recipie}>
                    </Recipe>
                    )
                })}           
            </div>
            <div className='recipe-list__add-recipe-btn-container'>
                <button 
                className='btn btn--primary'
                onClick={handleRecipeAdd}>
                    Add Recipie
                </button>
            </div>

        </div>
        </>
    )
}
