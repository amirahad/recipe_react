import { doc, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase.config';
import useTheme from '../../hooks/useTheme';
import './Recipes.css'

export default function Recipe() {
    const { id } = useParams();
    const { mode } = useTheme();
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    //get single data matching the given id from firebase
    useEffect(() => {
        setIsPending(true);
        onSnapshot(doc(db, "recipes", id), (doc) => {
            if (doc.exists()) {
                setData(doc.data());
                setIsPending(false);
            } else {
                setError('No document!');
                setIsPending(false);
            }
        })
    }, [])




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
