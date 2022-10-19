import { Contact } from "./contact";
import { Skills } from "./skills";
import { Frameworks } from "./frameworks";

export const LeftPanel = () => {
    return(
        <>
            <Contact />
            <Skills />
            <Frameworks />
        </>
    );
};