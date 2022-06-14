import React from 'react';
import { useNavigate } from 'react-router-dom'

const ProjectCard = (project) => {
    const { img, name, description, _id } = project.project
    const navigate = useNavigate()
    const projectDetails = (id) => {
        navigate(`/project/${id}`)
    }
    return (
        <div>
            <div className="card w-96 bg-gray-900	 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl crafts" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <button onClick={() => projectDetails(_id)} className='btn btn-primary btn-outline'>Details</button>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;