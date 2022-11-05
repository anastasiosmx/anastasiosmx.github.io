import { Contact } from "./contact";
import { Skills } from "./skills";
import { Frameworks } from "./frameworks";
import { Awards } from "./awards";
import { Military } from "./military";
import { Hobbies } from "./hobbies";
import { SoftSkills } from "./softSkills";

export const LeftPanel = () => {
    return(
        <>
            <Contact />
            <Skills />
            <Frameworks />
            <Awards />
            <Military />
            <Hobbies />
            <SoftSkills />
        </>
    );
};