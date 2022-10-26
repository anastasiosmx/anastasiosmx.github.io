import { Contact } from "./contact";
import { Skills } from "./skills";
import { Frameworks } from "./frameworks";
import { Awards } from "./awards";

export const LeftPanel = () => {
    return(
        <>
            <Contact />
            <Skills />
            <Frameworks />
            <Awards />
        </>
    );
};