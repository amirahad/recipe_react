import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import './RecipeList.css'

export default function RecipeList({ recipe }) {
    const { title, cookingTime, method, id } = recipe;
    const { color, mode } = useTheme();
    return (
        <div className={`card ${mode}`}>
            <h2>{title}</h2>
            <p>Cooking Time: {cookingTime} mins</p>
            <div>
                {method.substring(0, 100)}...
            </div>
            <Link to={`/recipes/${id}`} style={{ background: color }}>
                Cook This
            </Link>

        </div>
    )
}
