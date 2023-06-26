import React, { useState } from 'react';
import Project from './Project';

const Portfolio = () => {
    const [projects] = useState([
        {
            name: 'Project 1',
            image: '#',
            link: '#',
            github: '#'
        },
        {
            name: 'Project 2',
            image: '#',
            link: '#',
            github: '#'
        },
        {
            name: 'Project 3',
            image: '#',
            link: '#',
            github: '#'
        },
        {
            name: 'Project 4',
            image: '#',
            link: '#',
            github: '#'
        },
        {
            name: 'Project 5',
            image: '#',
            link: '#',
            github: '#'
        },
        {
            name: 'Project 6',
            image: '#',
            link: '#',
            github: '#'
        },
    ]);



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