import React from "react";
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/Tyler-Phillips12" 
                className= 'github'>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/tyler-phillips-63651677/"
                className= 'linkedin'>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
        </footer>
    );
}
