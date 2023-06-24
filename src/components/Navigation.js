import React from 'react';

const Navigation = ({ selectedSection, setSelectedSection }) => {
    // Define the array of sections for the nav
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav className='p-5 bg-blue-300'>
            <ul className='flex justify-around'>
                {
                    sections.map(section => (
                        <li key={section}>
                            <a
                              href='#'
                              className={`text-blue-900 hover:text-blue-600 ${selectedSection === section && 'highlight'}`}
                              onClick={() => setSelectedSection(section)}
                            >
                              {section}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navigation;