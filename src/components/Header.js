import { Link } from 'react-router-dom';

export default function Header(props) {

    return (
        <header>
            <nav>
                <Link to='/'>kateiscoding</Link>

                <div className='nav-links'>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/projects'>PROJECTS</Link>
                </div>

            </nav>
        </header>
    )
}


