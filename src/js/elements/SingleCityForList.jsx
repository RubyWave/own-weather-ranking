import { usePreListDispatcher } from "../contexts/PreList";
import closeIcon from '../../../public/images/close-icon.svg';

export default function SingleCityForList ({name, id}){

    const dispatch = usePreListDispatcher();

    function handleClick(e) {
        dispatch({
            type: 'remove',
            id: id
        });
    }

    return(
        <li className="single-city-for-list">
            <span className="single-city-for-list__name">{name} </span>
            <img className="single-city-for-list__remover" onClick={handleClick} src={closeIcon}/>

        </li>
    );
}