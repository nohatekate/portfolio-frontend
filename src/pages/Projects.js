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
            <div className='project-card'>
                <h2>{project.name}</h2>
                <div className='project-details'>
                    <div className='project-description'>
                        <p>{project.description}</p>
                    </div>

                    <div className='project-image'>
                        <img src={project.image} alt="" />
                    </div>
                </div>
                <div className='card-button-container'>
                    <a href={project.git} target='_blank' rel="noreferrer" className='fake-button'>Github
                    </a>
                    <a href={project.live} target='_blank' rel="noreferrer" className='fake-button'>Live Site
                    </a>
                </div>
            </div>
        ))
    }

    return projects ? loaded() : loading();
}



