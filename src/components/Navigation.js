import React from 'react';

const Navigation = ({ selectedSection, setSelectedSection }) => {
    // Define the array of sections for the nav
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav className='p-5 bg-customBlack'>
            <ul className='flex justify-around'>
                {
                    sections.map(section => (
                        <li key={section}>
                            <button
                              className={`custom-font-bold text-xl text-customBlue hover:text-blue-600 ${selectedSection === section && 'highlight'}`}
                              onClick={() => setSelectedSection(section)}
                            >
                              {section}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navigation;