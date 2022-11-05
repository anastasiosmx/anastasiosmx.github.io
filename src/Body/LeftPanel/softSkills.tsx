import React from "react";

export const SoftSkills = () => {
    const [showSoftSkills, setshowSoftSkills] = React.useState(true);

    const softSkillsVisibilityHandler = () => {
        setshowSoftSkills(!showSoftSkills);
    }

    return(
        <>
            <h1 className="letters-spacing"><span className="cursor" onClick={softSkillsVisibilityHandler}>&gt;</span>&nbsp;SOFT SKILLS</h1> 
            {showSoftSkills?
                <span>
                    <ul>
                        <li>
                            Leadership
                        </li>
                        <li>
                            Team Player
                        </li>
                        <li>
                            Problem Solving
                        </li>
                        <li>
                            Agile & Scrum
                        </li>
                    </ul>
                </span>
                :
                null
            }
        </>
    );
}