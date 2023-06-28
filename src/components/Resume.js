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
        <section id='resume' className="flex flex-col items-center justify-center pt-4 pr-4 pl-4 pb-8 bg-gray-100">
            <h2 className='text-2xl custom-font-bold underline text-center md:text-left'>Proficiencies</h2>
            <div className="mt-8 mb-7">
                <a href="/DerekSutton-Resume2023.pdf" download className="bg-blue-500 hover:bg-blue-700 text-customBlack hover:text-white font-bold py-2 px-4 rounded">
                    Download Resume
                </a>
            </div>
            <div className='mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full md:w-4/5 lg:w-2/3'>
                {skills.map((skill, index) => (
                    <div key={index} className='p-4 bg-white shadow-lg rounded-md text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                        <img src={skill.logo} alt={skill.name} className='h-24 w-24 mx-auto mb-2' />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Resume;