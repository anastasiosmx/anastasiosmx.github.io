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
                <span className="letters-spacing">
                    <h3 className="paragraph-title-deep-purple">BSC OF COMPUTER SCIENCE & BIOMEDICAL INFORMATICS</h3>
                    <p>
                        UNIVERSITY OF THESSALY &nbsp;
                        <span className="orange bold">
                            |
                        </span>
                        &nbsp;2015&nbsp;
                        <span className="orange bold">
                            -
                        </span>
                        &nbsp;2020
                        <br/>
                        <span className="orange bold">
                            GPA
                        </span>
                        &nbsp;: 7.57 / 10
                    </p>

                    <h3 className="paragraph-title-deep-purple">ECCE <span className="orange bold">|</span> ENGLISH LANGUAGE</h3>
                    <p>
                        UNIVERSITY OF MICHIGAN &nbsp;
                        <span className="orange bold">
                            |
                        </span>
                        &nbsp;2012
                    </p>

                    <h3 className="paragraph-title-deep-purple">ECPE <span className="orange bold">|</span> ENGLISH LANGUAGE</h3>
                    <p>
                        UNIVERSITY OF MICHIGAN &nbsp;
                        <span className="orange bold">
                            |
                        </span>
                        &nbsp;2022
                    </p>
                </span>
                :
                null
            }
        </>
    );
}