import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import "./skillsRating.css";

export const SkillsRating = (props: any) => {
    const activeStars: number = props.rating;
    const totalStars: number = 5;

    return(
        <>
            {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStars ? 
                <FontAwesomeIcon key={index} icon={faCircle} fixedWidth size="xs" color="#ff914d" /> : <span key={index} className='empty-circle'></span>;
            })}
        </>
    );
}