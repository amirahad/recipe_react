import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/recipeList/RecipeList'
import { useEffect, useState } from 'react';
import Search from '../../components/search/Search';

export default function Home() {

    const { data, isPending, error } = useFetch('http://localhost:3000/recipes');


    const [recipes, setRecipes] = useState([]);
    const [displayRecipes, setDisplayRecipes] = useState([]);
    useEffect(() => {
        if (data) {
            setRecipes(data);
            setDisplayRecipes(data);
        }
    }, [data]);

    const handleSearch = (searchValue) => {
        if (searchValue === '') {
            setDisplayRecipes(recipes);
        }
        else if (searchValue !== '') {
            let value = searchValue.toLowerCase();
            const filteredRecipes = recipes.filter((recipe) => {
                const recipeName = recipe.title.toLowerCase();
                return recipeName.includes(value)
            })
            setDisplayRecipes(filteredRecipes);
        }
    }


    return (
        <div className="home">
            <Search
                onSearch={handleSearch}
            />
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            <div className='recipes'>
                {(displayRecipes.length !== 0) ? displayRecipes.map(recipe => (
                    <RecipeList
                        key={recipe.id}
                        recipe={recipe}
                    />
                )) :
                    (!isPending && <p className='no-recipes'>No Recipes Found</p>)
                }
            </div>

        </div>
    )
}
