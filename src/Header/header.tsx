import { HeaderJobTitle } from "./header-job-title";
import Typewriter from 'typewriter-effect';
import "./header.css";

export const Header = () => {
    return(
        <>
            <div className="header-full-name">
                <span className="header-gt">
                    &gt;
                </span>
                <Typewriter
                    options={{
                        strings: '<span class="header-name">Anastasios Mexias</span>',
                        autoStart: true,
                        delay: 100,
                        cursorClassName: "cursor-class"
                    }}
                />
            </div>
            <HeaderJobTitle />
        </>
    );
};