import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";

export default function Header(props) {

    const onButtonClick = () => {
        fetch('/resume/KatherineResumePDF.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'KatherineResumePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <header>
            <nav>
                <Link to='/'>kateiscoding</Link>

                <div className='nav-links'>
                    <Link to='/about'>about</Link>
                    <Link to='/projects'>projects</Link>
                    <a className="icon" href='https://www.linkedin.com/in/kateiscoding/' target='_blank' rel="noreferrer">< FaLinkedin /></a>
                    <a className="icon" href='https://github.com/nohatekate' target='_blank' rel="noreferrer">< FaGithub /></a>
                    <button className="icon" onClick={onButtonClick}><MdPictureAsPdf /></button>
                </div>

            </nav>
        </header>
    )
}


