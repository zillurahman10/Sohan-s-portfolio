import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './ProjectDetails.css'

const ProjectDetails = () => {
    const { id } = useParams()
    const [project, setProject] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    console.log(project.name);
    return (
        <div>
            <img className='project-img mx-auto mt-5' src={project.img} alt="" />
            <h2 className='text-3xl text-center mt-3'>{project.name}</h2>
            <p>{project.description}</p>
            <a href="" className='btn btn-primary'>Website</a>
            <a href="" className='btn btn-primary'>Client site code</a>
            <a href="" className='btn btn-primary'>Server site code</a>
        </div>
    );
};

export default ProjectDetails;