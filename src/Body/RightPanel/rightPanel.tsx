import './rightPanel.css';
import { Profile } from "./profile";
import { Education } from "./education";
import { Experience } from "./experience";

export const RightPanel = () => {
    return(
        <>
            <Profile />
            <Education />
            <Experience />
        </>
    );
};