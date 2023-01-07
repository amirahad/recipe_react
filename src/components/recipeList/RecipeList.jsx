import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';

import TrashCan from '../../assets/trashCan.svg';
import './RecipeList.css'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';

const handleClick = async (id) => {
    await deleteDoc(doc(db, 'recipes', id));
}


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
            <img
                src={TrashCan}
                style={{ filter: mode === 'dark' ? 'invert(1)' : 'invert(0)' }}
                alt="del"
                className="del"
                onClick={() => handleClick(id)}
            />
        </div>
    )
}
