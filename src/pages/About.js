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
            <div>
                <h2>{about.name}</h2>
                <h3>{about.email}</h3>
                <p>{about.bio}</p>
            </div>
        )
    }

    return about ? loaded() : loading();
}


