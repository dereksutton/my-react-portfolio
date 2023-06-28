import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="bg-customBlack shadow-lg rounded-lg overflow-hidden">
            <img src={project.image} alt={project.name} className="w-full h-[200px] object-cover object-center"/>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 custom-font-bold text-customBlue">{project.name}</h2>
                <div className="flex justify-between">
                    <a href={project.link} target="_blank" rel="noreferrer" className="custom-font-reg text-customBlue hover:text-blue-700">View Project</a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="custom-font-reg text-customBlue hover:text-blue-700">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Project;