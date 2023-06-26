import React from 'react';
import Headshot from '../assets/Headshot.jpg';

const AboutMe = () => {
    return (
        <section className="px-4 py-8 text-center">
            <h2 className="text-2x1 font-bold">About Me</h2>
            <img 
                className="w-64 mx-auto my-4 rounded"
                src={Headshot} 
                alt='Image of Derek Sutton' 
            />
            <p className="max-w-prose mx-auto">
                My bio here....
            </p>
        </section>
    );
}

export default AboutMe;