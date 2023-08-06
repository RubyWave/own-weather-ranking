import { usePreListDispatcher } from "../contexts/PreList";

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
            <span className="single-city-for-list__name">{id} </span>
            <span className="single-city-for-list__name">{name} </span>
            <span className="single-city-for-list__remover" onClick={handleClick}>(r)</span>

        </li>
    );
}