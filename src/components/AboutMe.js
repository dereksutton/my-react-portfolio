import React from 'react';
import Headshot from '../assets/Headshot.jpg';

const AboutMe = () => {
    return (
        <section>
            <h2>About Me</h2>
            <img src={Headshot} alt='Image of Derek Sutton' />
            <p>
                My bio here....
            </p>
        </section>
    );
}

export default AboutMe;