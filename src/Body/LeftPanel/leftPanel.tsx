import { Contact } from "./contact";
import { Skills } from "./skills";
import { Frameworks } from "./frameworks";
import { Awards } from "./awards";
import { Military } from "./military";
import { Hobbies } from "./hobbies";

export const LeftPanel = () => {
    return(
        <>
            <Contact />
            <Skills />
            <Frameworks />
            <Awards />
            <Military />
            <Hobbies />
        </>
    );
};