import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGitlab, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
    return(
        <>
        <h1 className="letters-spacing"><span className="cursor">&gt;</span>&nbsp;CONTACT</h1> 
        <div className="contact-label">
            <a href="tel:+306979708828">
                <FontAwesomeIcon icon={faPhone} fixedWidth size="lg" color="#ff914d" />
                <span className="contact-text letters-spacing">
                    +30 697-970-8828
                </span>
            </a>
        </div>
        <div className="contact-label">
            <a href="mailto:mxanastasios@gmail.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} fixedWidth size="lg" color="#ff914d" />
                <span className="contact-text letters-spacing">
                    <span className="orange-text">
                        mxanastasios    
                    </span> 
                    @gmail.com
                </span>
            </a>
        </div>
        <div className="contact-label">
            <FontAwesomeIcon icon={faLocationDot} fixedWidth size="lg" color="#ff914d" />
            <span className="contact-text letters-spacing">
                Thessaloniki, Greece
            </span>
        </div>
        <div className="contact-label">
            <a href="https://gitlab.com/a.mexias" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGitlab} fixedWidth size="lg" color="#ff914d" />
                <span className="contact-text letters-spacing">
                    gitlab.com/
                    <span className="orange-text">
                        a.mexias    
                    </span> 
                </span>
            </a>
        </div>
        <div className="contact-label">
            <a href="https://github.com/anastasiosmx" target="_blanc" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} fixedWidth size="lg" color="#ff914d" />
                <span className="contact-text letters-spacing">
                    github.com/
                    <span className="orange-text">
                        anastasiosmx    
                    </span> 
                </span>
            </a>
        </div>
        </> 
    );
};