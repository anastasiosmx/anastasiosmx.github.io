import React from "react";

export const Hobbies = () => {
    const [showHobbies, setshowHobbies] = React.useState(true);

    const hobbiesVisibilityHandler = () => {
        setshowHobbies(!showHobbies);
    }

    return(
        <>
            <h1 className="letters-spacing"><span className="cursor" onClick={hobbiesVisibilityHandler}>&gt;</span>&nbsp;HOBBIES</h1> 
            {showHobbies?
                <h2>Test</h2>
                :
                null
            }
        </>
    );
}