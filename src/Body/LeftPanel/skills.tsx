import "./skills.css";
import { SkillsRating } from "./skillsRating";

export const Skills = () => {
    return(
        <>
            <h1 className="letters-spacing"><span className="cursor">&gt;</span>&nbsp;SKILLS</h1> 
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
        </>
    );
};