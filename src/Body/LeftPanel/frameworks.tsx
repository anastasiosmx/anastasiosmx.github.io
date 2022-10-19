import './frameworks.css';
import React from 'react';

export const Frameworks = () => {
    const [showFrameworks, setShowFrameworks] = React.useState(true);

    const frameworksVisibilityHandler = () => {
        setShowFrameworks(!showFrameworks);
    }

    return(
        <>
        <h1 className="letters-spacing"><span className="cursor" onClick={frameworksVisibilityHandler}>&gt;</span>&nbsp;FRAMEWORKS</h1>
        {showFrameworks?
            <h1>hello</h1>
            :
            null
        }
        </>
    );
}