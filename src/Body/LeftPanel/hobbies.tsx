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
                <span>
                    <ul>
                        <li>
                            Fencing
                        </li>
                        <li>
                            Tennis
                        </li>
                        <li>
                            Cycling
                        </li>
                        <li>
                            Gaming
                        </li>
                        <li>
                            D & D
                        </li>
                    </ul>
                </span>
                :
                null
            }
        </>
    );
}