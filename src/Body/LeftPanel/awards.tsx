import React from "react";
import './awards.css';

export const Awards = () => {
    const [showAwards, setshowAwards] = React.useState(true);

    const awardsVisibilityHandler = () => {
        setshowAwards(!showAwards);
    }

    return(
        <>
            <h1 className="letters-spacing"><span className="cursor" onClick={awardsVisibilityHandler}>&gt;</span>&nbsp;AWARDS</h1> 
            {showAwards?
                <>
                    <h3 className="paragraph-title-deep-purple">IEEE REGION 8</h3>
                    <h4 className="paragraph-title-deep-purple">EXEMPLARY STUDENT BRANCH AWARD</h4>
                    <p>
                        IEEE Student Branch University of Thessaly &nbsp;
                        <span className="orange bold">
                            |
                        </span> 
                        <br/>
                        <span className="orange bold">
                            Years
                        </span>
                        :&nbsp;2017&nbsp;
                        <span className="orange bold">
                            -
                        </span>
                        &nbsp;2019
                    </p>
                </>
                :
                null
            }
        </>
    );
}