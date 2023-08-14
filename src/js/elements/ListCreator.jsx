import ListAdder from "./ListAdder";
import { useContext } from "react";
import { getPreList } from "../contexts/PreList";
import ListLister from "./ListLister";
import DataFetcher from "./DataFetcher";

export default function ListCreator() {

    return (
        <div className="list-creator">
            <DataFetcher />
            <ListAdder />
            <ListLister />
        </div>
    );
}