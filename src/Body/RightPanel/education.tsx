import React from "react";

export const Education = () => {
    const [showEducationInfo, setShowEducationInfo] = React.useState(true);

    const educationVisibilityHandler = () => {
        setShowEducationInfo(!showEducationInfo);
    }

    return(
        <>
            <h1 className="letters-spacing"><span className="cursor" onClick={educationVisibilityHandler}>&gt;</span>&nbsp;EDUCATION</h1>
            {showEducationInfo?
                <span className="justify-text-full letters-spacing">
                    
                </span>
                :
                null
            }
        </>
    );
}