import React from 'react';
import Project from './Project';

const Portfolio = ({ projects }) => {
        return (
        <section>
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </section>
    );
}

export default Portfolio;