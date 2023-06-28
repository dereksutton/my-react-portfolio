import React from 'react';

const Navigation = ({ selectedSection, setSelectedSection }) => {
    // Define the array of sections for the nav
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav className='pb-3 bg-customBlack border-b-4 border-customBlue'>
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