import "./contact.css";
import { Obfuscate } from '@south-paw/react-obfuscate-ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGitlab, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
    const gitLabDomain: string="mexias";
    const gitHubDomain: string="anastasiosmx";
    const emailPrefix: string ="mx";
    const emailBody: string = "anastasios";

    return(
        <>
        <h1 className="letters-spacing"><span className="cursor">&gt;</span>&nbsp;CONTACT</h1> 
        <div className="contact-label">
            <FontAwesomeIcon icon={faPhone} fixedWidth size="lg" color="#ff914d" />
            <span className="contact-text letters-spacing">
                <Obfuscate tel>
                    [GR] 697-970-8828
                </Obfuscate>
            </span>
        </div>
        <div className="contact-label">
            <FontAwesomeIcon icon={faEnvelope} fixedWidth size="lg" color="#ff914d" />
            <span className="contact-text letters-spacing">
                <span className="orange-text">
                <Obfuscate email>
                    {emailPrefix + emailBody + "@gmail.com"}
                </Obfuscate>
                </span>
            </span>
        </div>
        <div className="contact-label">
            <FontAwesomeIcon icon={faLocationDot} fixedWidth size="lg" color="#ff914d" />
            <span className="contact-text letters-spacing">
                Thessaloniki, Greece
            </span>
        </div>
        <div className="contact-label">
            <FontAwesomeIcon icon={faGitlab} fixedWidth size="lg" color="#ff914d" />
            <span className="contact-text letters-spacing">
                <Obfuscate href="https://gitlab.com/a.mexias">
                    gitlab.com/
                </Obfuscate>
            </span>
            <span className="letters-spacing">
                <span className="orange-text">
                    a
                </span>
                .
                <span className="orange-text">
                    {gitLabDomain}
                </span>
            </span>
        </div>
        <div className="contact-label">
            <FontAwesomeIcon icon={faGithub} fixedWidth size="lg" color="#ff914d" />
            <span className="contact-text letters-spacing">
                <Obfuscate href="https://github.com/anastasiosmx">
                    github.com/
                </Obfuscate>
            </span>
            <span className="letters-spacing">
                <span className="orange-text">
                    {gitHubDomain}
                </span>
            </span>
        </div>
        </> 
    );
};