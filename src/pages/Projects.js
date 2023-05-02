import { useState, useEffect } from 'react';

export default function Projects(props) {

    const [projects, setProjects] = useState(null)


    const getProjectsData = async () => {
        try {
            const response = await fetch('./projects.json');
            const data = await response.json();
            setProjects(data);
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => { getProjectsData() }, []);

    const loading = () => {
        return (<h1>Loading Projects...</h1>)
    }

    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h2>{project.name}</h2>
                <img src={project.image} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        ))
    }

    return projects ? loaded() : loading();
}



