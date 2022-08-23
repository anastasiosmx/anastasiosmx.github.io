import { HeaderJobTitle } from "./header-job-title";
import "./header-name.css";

export const HeaderName = () => {
    return(
        <>
            <div className="header-full-name">
                <h1 className="header-bg">
                    <span className="header-gt">
                        &gt;
                    </span>
                    Anastasios Mexias
                </h1>
            </div>
            <HeaderJobTitle />
        </>
    );
};