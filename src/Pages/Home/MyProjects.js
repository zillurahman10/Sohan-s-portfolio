import React, { useEffect, useState } from 'react';
import './MyProjects.css'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import ProjectCard from './ProjectCard';

const MyProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/myprojects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <>
            <h1 className='text-3xl font-bold text-center mb-12'>My Projects</h1>
            <div className='grid pl-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    projects.map(project => <ProjectCard key={project._id}
                        project={project}></ProjectCard>)
                }
            </div>
        </>
    );
};

export default MyProjects;