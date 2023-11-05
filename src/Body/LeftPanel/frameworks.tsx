import './frameworks.css';
import React from 'react';
import { SkillsRating } from './skillsRating';

export const Frameworks = () => {
    const [showFrameworks, setShowFrameworks] = React.useState(true);

    const frameworksVisibilityHandler = () => {
        setShowFrameworks(!showFrameworks);
    }

    return(
        <>
        <h1 className="letters-spacing"><span className="cursor" onClick={frameworksVisibilityHandler}>&gt;</span>&nbsp;FRAMEWORKS</h1>
        {showFrameworks?
            <span>
                <table className="letters-spacing">
                    <tbody>
                        <tr>
                            <td>
                                &#8226; React
                            </td>
                            <td>
                                <SkillsRating rating={5} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &#8226; Angular
                            </td>
                            <td>
                                <SkillsRating rating={3} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &#8226; Laravel
                            </td>
                            <td>
                                <SkillsRating rating={2} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &#8226; Django
                            </td>
                            <td>
                                <SkillsRating rating={2} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &#8226; Nest.js
                            </td>
                            <td>
                                <SkillsRating rating={2} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &#8226; Ruby on Rails
                            </td>
                            <td>
                                <SkillsRating rating={2} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <hr className='framework-line-seperator'></hr>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &#8226; AntDesign
                            </td>
                            <td>
                                <SkillsRating rating={5} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &#8226; Bootstrap
                            </td>
                            <td>
                                <SkillsRating rating={5} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &#8226; Materialize
                            </td>
                            <td>
                                <SkillsRating rating={3} />
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
}