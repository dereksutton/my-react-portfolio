import React from 'react';
import Headshot from '../assets/Headshot.jpg';

const AboutMe = () => {
    return (
        <section className="flex flex-col items-center justify-center mt-12 mb-20">
            <div className="w-11/12 sm:w-3/4 lg:w-1/2 xl:w-3/5 2xl:w-1/2 mx-auto bg-customBlack text-customBlue shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center md:space-x-6">
                <div className="w-full md:w-1/2 space-y-2">
                    <h2 className="text-xl custom-font-bold underline text-center md:text-left">About Me</h2>
                    <p className="custom-font-reg max-w-prose text-center md:text-left">
                    <br></br>
                    I'm Derek Sutton, a Full-Stack Web Developer with a unique blend of entrepreneurial and IT recruitment experience. As the founder of Visioneer Branding, LLC, I built a successful online merchandising business from the ground up, automated its operations, and worked with a diverse range of clients, including Fortune 100 companies. My experience as an IT recruiter honed my skills in sourcing top-tier IT talent, which has recognized me as a top recruiter.
                    <br></br>
                    <br></br>
                    Having a Full-Stack Coding Bootcamp Certificate from Georgia Tech Professional Education, I've gained expertise in both frontend and backend development. My toolkit includes HTML, CSS, Bootstrap, TailwindCSS, JavaScript, React.js, Node.js, Express.js, Java, MongoDB, and SQL, with proficiency in various development tools and platforms.
                    <br></br>
                    <br></br>
                    What sets me apart is my ability to merge my technical acumen with my branding experience, creating software solutions that not only meet functional requirements but also resonate with users. I'm passionate about leveraging these skills to contribute to business growth and client satisfaction and always welcome new challenges and learning opportunities.
                    </p>
                </div>
            <img 
                className="w-96 h-96 rounded-full mx-auto md:mx-0"
                src={Headshot} 
                alt='Derek Sutton' 
            />
            </div>
        </section>
    );
}

export default AboutMe;