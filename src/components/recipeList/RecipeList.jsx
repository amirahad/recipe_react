import { Link } from 'react-router-dom';
import './RecipeList.css'

export default function RecipeList({ recipe }) {
    const { title, cookingTime, method, id } = recipe;
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>Cooking Time: {cookingTime} mins</p>
            <div>
                {method.substring(0, 100)}...
            </div>
            <Link to={`/recipes/${id}`} >
                Cook This
            </Link>

        </div>
    )
}
