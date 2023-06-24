import React from 'react';

const Project = ({ project }) => {
    return (
        <div>
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} />
            <a href={project.link}>Deployed Application</a>
            <a href={project.github}>GitHub Repository</a>
        </div>
    );
}

export default Project;