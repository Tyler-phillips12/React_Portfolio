import React from "react";
import './projects.css'


export default function Project({ title, image, deployedLink, github }) {

    return (
        <div className="project-card" key={title}>
            <a href={github}>
            <img 
                src={image}
                alt={title}
                className="project-screencap"
            />
            </a>
            <div className="deploy">
                <a href={deployedLink}>{title}</a>{''} <br></br>
            </div>
        </div>
    );
}