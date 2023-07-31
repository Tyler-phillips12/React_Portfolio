import React, { useState } from "react";
import Project from "../Projects/projects";
import './portfolio.css'
import SCREENSHOTS from "../../assets/projects/index.js";


export default function Portfolio() {
    const [showcase] =  useState([
        {
            title: 'Sights & Sounds',
            image: SCREENSHOTS.SightsAndSounds,
            deployedLink: "https://reallyawesomename.github.io/room-for-activities/",
            github: "https://github.com/ReallyAwesomeName/room-for-activities",
        },
        {
            title: 'Achievement Unlocked',
            image: SCREENSHOTS.AchievementUnlocked,
            deployedLink: "https://thawing-cove-75959.herokuapp.com/",
            github: "https://github.com/Greivin13/AchievementUnlocked",
        },
        {
            title: 'Workday Scheduler',
            image: SCREENSHOTS.WorkdayScheduler,
            deployedLink: "https://tyler-phillips12.github.io/Simple-Calendar-API/",
            github: "https://github.com/Tyler-phillips12/Simple-Calendar-API",
        },
        {
            title: 'Password Generator',
            image: SCREENSHOTS.PasswordGenerator,
            deployedLink: "https://tyler-phillips12.github.io/secure-password-generator-for-employees/",
            github: "https://github.com/Tyler-phillips12/secure-password-generator-for-employees",
        },
        {
            title: 'Tech Blog Site',
            image: SCREENSHOTS.TechBlogSite,
            deployedLink: "https://serene-reef-12663-5bdd969bb66a.herokuapp.com/",
            github: "https://github.com/Tyler-phillips12/Tech_Blog_",
        },
        {
            title: 'Coding Quiz',
            image: SCREENSHOTS.CodingQuiz,
            deployedLink: "https://tyler-phillips12.github.io/javascript-coding-quiz/",
            github: "https://github.com/Tyler-phillips12/javascript-coding-quiz",
        },
    ]);

    return (
        <section className="project-space">
            <h2> Portfolio </h2>
            <div className="portfolio-sections">
                {showcase.map((project, index) => (
                <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
}