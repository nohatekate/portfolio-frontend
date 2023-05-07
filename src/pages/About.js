import { useState, useEffect } from 'react';
import { MdPictureAsPdf } from "react-icons/md";

export default function About(props) {

    const onButtonClick = () => {
        fetch('/resume/KatherineResumePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'KatherineResumePDF.pdf';
                alink.click();
            })
        })
    }

    const [about, setAbout] = useState(null);

    const getAboutData = async () => {
        try {
            const response = await fetch('./about.json');
            const data = await response.json();
            setAbout(data);
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => { getAboutData() }, []);

    const loading = () => {
        return (<h1>Loading About...</h1>)
    }

    const loaded = () => {
        return (
            <div className="about-page-content">
                <h2>{about.name}</h2>


                <div className='email-and-resume'>
                    <div><p>Email:</p></div>
                    <div><a href="mailto:kateiscoding@gmail.com">{about.email}</a></div>
                </div>

                <div className='email-and-resume'>
                    <p>Resume:</p>
                    <button className="icon" onClick={onButtonClick}><MdPictureAsPdf /></button>
                </div>




                <div className='about-details'>

                    <div className='about-image'>
                        <img src={about.headshot} alt="" />
                    </div>

                    <div className='about-description'>

                        <p className="pre-line">{about.bio}</p>
                    </div>



                </div>

            </div>
        )
    }

    return about ? loaded() : loading();
}


