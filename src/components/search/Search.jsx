import { useEffect, useState } from 'react'
import useTheme from '../../hooks/useTheme';
import './Search.css'

export default function Search(props) {
    const [search, setSearch] = useState('');
    const { mode } = useTheme();
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        props.onSearch(search);
    }, [search])

    return (
        <div className={`search ${mode}`}>
            <input
                className='search-input'
                type="text"
                placeholder='Search Recipes'
                value={search}
                onChange={handleChange}
            />
        </div>
    )
}