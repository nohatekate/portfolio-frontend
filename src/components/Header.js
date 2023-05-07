import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header(props) {
    return (
        <header>
            <nav>
                <Link to='/'>kateiscoding</Link>

                <div className='nav-links'>
                    <Link to='/about'>about</Link>
                    <Link to='/projects'>projects</Link>
                    <a className="icon" href='https://www.linkedin.com/in/kateiscoding/' target='_blank' rel="noreferrer">< FaLinkedin /></a>
                    <a className="icon" href='https://github.com/nohatekate' target='_blank' rel="noreferrer">< FaGithub /></a>
                </div>

            </nav>
        </header>
    )
}


