import ListAdder from "./ListAdder";
import { useContext } from "react";
import { getPreList } from "../contexts/PreList";
import ListLister from "./ListLister";

export default function ListCreator() {

    return (
        <div className="list-creator">
            <ListAdder />
            <ListLister />
        </div>
    );
}