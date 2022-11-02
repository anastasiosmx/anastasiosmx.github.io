import React from "react";
import "./profile.css";

export const Profile = () => {
    const [showProfileInfo, setShowProfileInfo] = React.useState(true);

    const profileVisibilityHandler = () => {
        setShowProfileInfo(!showProfileInfo);
    }

    return(
        <>
            <h1 className="letters-spacing"><span className="visibility-hint cursor" onClick={profileVisibilityHandler}>&gt;</span>&nbsp;PROFILE</h1>
            {showProfileInfo?
                <span className="justify-text-full letters-spacing">
                    <p>
                        My name is Anastasios Mexias and I live in
                        Thessaloniki. My scientific interests are equally
                        derived from the fields of Computer Science,
                        more precisely Software Engineering, Web
                        Development, and Data Analysis as well as
                        Biology. After finishing university my passion for
                        capturing creative ideas led me to web
                        development. As of today, I strive to create
                        websites based on the latest frameworks such as Angular, React and Django.
                    </p>
                </span>
                :
                null
            }
        </>
    );
}