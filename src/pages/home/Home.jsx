import './Home.css'
//import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/recipeList/RecipeList'
import { useEffect, useState } from 'react';
import Search from '../../components/search/Search';
import { collection, onSnapshot } from 'firebase/firestore';

import { db } from '../../firebase/firebase.config';

export default function Home() {

    const [recipes, setRecipes] = useState([]);
    const [displayRecipes, setDisplayRecipes] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);
        const unsubscribe = onSnapshot(collection(db, "recipes"), (querySnapshot) => {
            if (querySnapshot.empty) {
                setError('No recipes found');
                setIsPending(false);
            } else {
                const recipes = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setRecipes(recipes);
                setDisplayRecipes(recipes);
                setIsPending(false);
            }
        }, (error) => {
            setError(error.message);
            setIsPending(false);
        });

        return () => unsubscribe();

    }, [])


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
