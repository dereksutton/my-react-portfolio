import React from 'react';
import htmlLogo from '../assets/logos/HTML-LOGO.png';
import cssLogo from '../assets/logos/CSS-LOGO.png';
import jsLogo from '../assets/logos/JS-LOGO.png';
import bootstrapLogo from '../assets/logos/BOOTSTRAP-LOGO.png';
import tailwindLogo from '../assets/logos/TAILWIND-LOGO.png';
import reactLogo from '../assets/logos/REACT-LOGO.png';
import nodeLogo from '../assets/logos/NODEJS-LOGO.png';
import expressLogo from '../assets/logos/EXPRESS-LOGO.png';
import mongoLogo from '../assets/logos/MONGODB-LOGO.png';
import sqlLogo from '../assets/logos/SQL-LOGO.png';
import gitLogo from '../assets/logos/GIT-LOGO.png';
import githubLogo from '../assets/logos/GITHUB-LOGO.png';

const Resume = () => {
    const skills = [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JS', logo: jsLogo },
        { name: 'Bootstrap', logo: bootstrapLogo },
        { name: 'Tailwind', logo: tailwindLogo },
        { name: 'React', logo: reactLogo },
        { name: 'Node', logo: nodeLogo },
        { name: 'Express', logo: expressLogo },
        { name: 'MongoDB', logo: mongoLogo },
        { name: 'SQL', logo: sqlLogo },
        { name: 'Git', logo: gitLogo },
        { name: 'GitHub', logo: githubLogo }
    ];

    return (
        <section id='resume'>
            <h2 className='text-2xl font-bold'>Proficiencies</h2>
            <div className='flex flex-wrap justify-around'>
                {skills.map((skill, index) => (
                    <div key={index} className='m-4'>
                        <img src={skill.logo} alt={skill.name} className='h-16 w-16' />
                        <p className='text-center'>{skill.name}</p>
                    </div>
                ))}
            </div>
            <div className="mt-5 text-center">
                <a href="/DerekSutton-Resume2023.pdf" download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Download Resume
                </a>
            </div>
        </section>
    )
}

export default Resume;