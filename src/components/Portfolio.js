import React, { useState } from 'react';
import Project from './Project';
import FeastFindr from '../assets/FeastFindr-Screenshot.png';
import NightOwl from '../assets/NightOwl-Screenshot.png';
import WeatherFetcher from '../assets/WeatherFetcher-Screenshot.png';
import TechBlog from '../assets/TechBlog-Screenshot.png'
import MuseumCandy from '../assets/MuseumCandy-Screenshot.png';
import DunderMifflin from '../assets/DunderMifflin-Screenshot.png';

const Portfolio = () => {
    const [projects] = useState([
        {
            name: 'FeastFindr',
            image: FeastFindr,
            link: 'https://protected-mesa-32753.herokuapp.com/',
            github: 'https://github.com/jmfarthin/Feast-Findr'
        },
        {
            name: 'NightOwl',
            image: NightOwl,
            link: 'https://victoriamcn.github.io/NightOwl/',
            github: 'https://github.com/victoriamcn/NightOwl'
        },
        {
            name: 'Weather Fetcher',
            image: WeatherFetcher,
            link: 'https://dereksutton.github.io/weather-fetcher/',
            github: 'https://github.com/dereksutton/weather-fetcher'
        },
        {
            name: 'Tech Blog Central',
            image: TechBlog,
            link: 'https://shielded-earth-13580-f3500b139b12.herokuapp.com/',
            github: 'https://github.com/dereksutton/mvc-tech-blog'
        },
        {
            name: 'Museum of Candy',
            image: MuseumCandy,
            link: 'https://dereksutton.github.io/museum-of-candy/',
            github: 'https://github.com/dereksutton/museum-of-candy'
        },
        {
            name: 'Dunder Mifflin',
            image: DunderMifflin,
            link: 'https://dereksutton.github.io/dunder-mifflin-lander/',
            github: 'https://github.com/dereksutton/dunder-mifflin-lander'
        },
    ]);

    return (
        <section className="p-8">
            <h2 className="text-2xl custom-font-bold underline mb-8 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-8">
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;