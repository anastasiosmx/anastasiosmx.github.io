import React from "react";

export const Military = () => {
    const [showMilitary, setShowMilitary] = React.useState(true);

    const amilitaryVisibilityHandler = () => {
        setShowMilitary(!showMilitary);
    }

    return(
        <>
            <h1 className="letters-spacing"><span className="cursor " onClick={amilitaryVisibilityHandler}>&gt;</span>&nbsp;MILITARY</h1> 
            {showMilitary?
                <>
                    <h3 className="paragraph-title-deep-purple">OBLIGATIONS FULLFILLED</h3>
                </>
                :
                null
            }
        </>
    );
}