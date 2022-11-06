import "./header-job-title.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

export const HeaderJobTitle = () => {
    return(
        <>
            <div className="job-title">
                <span className="job-specialty">
                    FRONTEND
                </span>&nbsp;
                DEVELOPER
            </div>
            <span className="download-icon visibility-hint">
                <span className="print-button-descr">
                    Print me!
                </span>
                <button className="download-button" onClick={() => window.print()}>
                    <FontAwesomeIcon icon={faFileArrowDown} fixedWidth size="lg" color="#ff914d" />
                </button>
            </span>
        </>
    );
};