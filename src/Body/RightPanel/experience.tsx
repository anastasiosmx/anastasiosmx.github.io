import React from "react";
import { Iee } from "./ieee";
import { LinkedBusiness } from "./linkedBusiness";
import { Pasteur } from "./pasteur";
import { VetPlatform } from "./vetplatform";
import { Persado } from "./persado";

export const Experience = () => {
    const [showExperienceInfo, setShowExperienceInfo] = React.useState(true);

    const experienceVisibilityHandler = () => {
        setShowExperienceInfo(!showExperienceInfo);
    }

    return(
        <>
         <h1 className="letters-spacing"><span className="cursor" onClick={experienceVisibilityHandler}>&gt;</span>&nbsp;EXPERIENCE</h1>
            {showExperienceInfo?
                <span>
                    <Persado />
                    <LinkedBusiness />
                    <VetPlatform />
                    <Pasteur />
                    <Iee />
                </span>
                :
                null
            }
        </>
    );
}