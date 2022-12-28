import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <div className="navbar__logo">
                    <Link to='/'>
                        <h1>
                            <span className="navbar__logo--first">Amir's Recipe</span>
                        </h1>
                    </Link>
                </div>
                <div className='navbar_right'>
                    <Link to='/create'>
                        Create Recipe
                    </Link>
                </div>
            </nav>
        </div>
    )
}
