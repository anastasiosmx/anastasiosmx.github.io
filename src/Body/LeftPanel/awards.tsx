import React from "react";
import './awards.css';

export const Awards = () => {
    const [showAwards, setshowAwards] = React.useState(true);

    const awardsVisibilityHandler = () => {
        setshowAwards(!showAwards);
    }

    return(
        <>
            <h1 className="letters-spacing"><span className="cursor " onClick={awardsVisibilityHandler}>&gt;</span>&nbsp;AWARDS</h1> 
            {showAwards?
                <>
                    <h3 className="paragraph-title-deep-purple">IEEE REGION 8 EXEMPLARY STUDENT BRANCH AWARD</h3>
                    <p>
                        IEEE Student Branch University of Thessaly <span className="orange bold">|</span> YEARS: 2017 - 2019
                    </p>
                </>
                :
                null
            }
        </>
    );
}