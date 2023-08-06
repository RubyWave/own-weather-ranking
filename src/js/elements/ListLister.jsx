import {getPreList} from "../contexts/PreList";
import {useState} from "react";
import SingleCityForList from "./SingleCityForList";

export default function ListLister() {
    const preList = getPreList();
    return (
        <ul className="pre-list">
            {preList.map((city) => <SingleCityForList key={city.id} name={city.name} id={city.id}/>)}
        </ul>
    );
}