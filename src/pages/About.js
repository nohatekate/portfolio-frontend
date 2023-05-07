import { useState, useEffect } from 'react';

export default function About(props) {

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
                <h3><a href="mailto:kateiscoding@gmail.com" target="_blank">{about.email}</a></h3>

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


