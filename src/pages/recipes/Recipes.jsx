import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import useTheme from '../../hooks/useTheme';
import './Recipes.css'

export default function Recipe() {
    const { id } = useParams();
    const url = `http://localhost:3000/recipes/${id}`;
    const { data, isPending, error } = useFetch(url);
    const { mode } = useTheme();

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && (
                <>
                    <h2 className='page-title'>{data.title}</h2>
                    <p className='time'>Cooking Time: {data.cookingTime} mins</p>
                    <ul>
                        {
                            data.ingredients.map(ingredient => (
                                <li key={ingredient}>{ingredient}</li>
                            ))
                        }
                    </ul>
                    <p className='method'>Method: {data.method}</p>

                </>
            )}
        </div>
    )
}
