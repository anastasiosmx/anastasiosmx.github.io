import React from "react";

export const Interests = () => {
    const [showInterests, setshowInterests] = React.useState(true);

    const interestsVisibilityHandler = () => {
        setshowInterests(!showInterests);
    }

    return(
        <>
            <h1 className="letters-spacing"><span className="cursor" onClick={interestsVisibilityHandler}>&gt;</span>&nbsp;INTERESTS</h1> 
            {showInterests?
                <span>
                    <ul>
                        <li>
                            Bioinformatics
                        </li>
                        <li>
                            Εconomics
                        </li>
                        <li>
                            Big Data
                        </li>
                    </ul>
                </span>
                :
                null
            }
        </>
    );
}