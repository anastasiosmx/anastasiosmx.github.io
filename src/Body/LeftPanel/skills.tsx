import React from "react";
import { SkillsRating } from "./skillsRating";

export const Skills = () => {
    const [showSkills, setShowSkills] = React.useState(true);

    const skillsVisibilityHandler = () => {
        setShowSkills(!showSkills);
    }

    return(
        <>
            <h1 className="letters-spacing"><span className="cursor" onClick={skillsVisibilityHandler}>&gt;</span>&nbsp;SKILLS</h1> 
            {showSkills? 
                <span>
                    <table className="letters-spacing">
                        <tbody>
                            <tr>
                                <td>
                                    &#8226; HTML, CSS
                                </td>
                                <td>
                                    <SkillsRating rating={5} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &#8226; JavaScript (ES6)
                                </td>
                                <td>
                                    <SkillsRating rating={4} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &#8226; TypeScript
                                </td>
                                <td>
                                    <SkillsRating rating={4} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &#8226; PhP
                                </td>
                                <td>
                                    <SkillsRating rating={4} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &#8226; Java
                                </td>
                                <td>
                                    <SkillsRating rating={3} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &#8226; C
                                </td>
                                <td>
                                    <SkillsRating rating={3} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &#8226; Python
                                </td>
                                <td>
                                    <SkillsRating rating={2} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &#8226; MySQL
                                </td>
                                <td>
                                    <SkillsRating rating={2} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </span>
                :
                null
            }
        </>
    );
};