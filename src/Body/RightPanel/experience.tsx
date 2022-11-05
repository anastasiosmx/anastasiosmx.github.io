import React from "react";
import { LinkedBusiness } from "./linkedBusiness";

export const Experience = () => {
    const [showExperienceInfo, setShowExperienceInfo] = React.useState(true);

    const experienceVisibilityHandler = () => {
        setShowExperienceInfo(!showExperienceInfo);
    }

    return(
        <>
         <h1 className="letters-spacing"><span className="cursor" onClick={experienceVisibilityHandler}>&gt;</span>&nbsp;EXPERIENCE</h1>
            {showExperienceInfo?
                <LinkedBusiness />
                :
                null
            }
        </>
    );
}