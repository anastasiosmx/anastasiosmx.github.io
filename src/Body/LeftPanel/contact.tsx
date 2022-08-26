import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
    return(
        <>
        <h1><span className="cursor">&gt;</span> CONTACT</h1> 
        <div className="contact-label">
            <FontAwesomeIcon icon={faPhone} fixedWidth size="lg" color="#ff914d" /> +30 697-970-8828
        </div>
        <div className="contact-label">
            <FontAwesomeIcon icon={faEnvelope} fixedWidth size="lg" color="#ff914d" /> mxanastasios@gmail.com
        </div>
        </> 
    );
};