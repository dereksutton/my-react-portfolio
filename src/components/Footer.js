import React from 'react';
import githubLogo from '../assets/GitHub-FooterLogo.png';
import linkedinLogo from '../assets/LinkedIn-FooterLogo.png';
import twitterLogo from '../assets/Twitter-FooterLogo.png';

const Footer = () => {
    return (
        <footer className='py-5 bg-white text-center text-white fixed bottom-0 w-full flex items-center justify-center flex-col space-y-4'>
            <div className="flex space-x-8">
                <a href="https://github.com/dereksutton" target="_blank" rel="noreferrer">
                    <img src={githubLogo} alt="GitHub" className="w-10 h-10" />
                </a>
                <a href="https://linkedin.com/in/suttonderek" target="_blank" rel="noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn" className="w-10 h-10" />
                </a>
                <a href="https://twitter.com/dereksutton86" target="_blank" rel="noreferrer">
                    <img src={twitterLogo} alt="Twitter" className="w-10 h-10" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;