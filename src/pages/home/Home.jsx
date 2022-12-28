import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/recipeList/RecipeList'
import { useState } from 'react';

export default function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
    // const { searchedData, setSearchedData } = useState(data);

    // const handleSearch = (e) => {
    //     const searchValue = e.target.value.toLowerCase();
    //     const newSearchData = data.filter((recipe) => {
    //         return Object.values(recipe).join('').toLowerCase().includes(searchValue);
    //     });
    //     setSearchedData(newSearchData);
    // }


    return (
        <div className="home">
            {/* <div>
                <input
                    type="text"
                    placeholder='Search Recipes'
                    onChange={handleSearch}
                />
            </div> */}
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            <div className='recipes'>
                {data && data.map(recipe => (
                    <RecipeList
                        key={recipe.id}
                        recipe={recipe}
                    />
                ))}
            </div>

        </div>
    )
}
