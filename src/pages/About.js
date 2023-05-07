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
                <p>{about.email}</p>
                <p>{about.bio}</p>
                {/* <img></img> */}
            </div>
        )
    }

    return about ? loaded() : loading();
}


