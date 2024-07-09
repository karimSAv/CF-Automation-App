import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import * as React from "react";
import { getSP } from "../../../utils/pnpjsConfig";

const BackView = () => {
    const [listItems, setListItems] = React.useState([] as any[]);

    const items = getSP().web.lists.getByTitle("CodesFirmes").items();

    console.log("items", items);

    React.useEffect(() => {
        const getSpfxListItems = async () => {
            try {
                // const items = await sp.web.lists.getByTitle("CodesFirmes").items();
                // setListItems(items);
            } catch (error) {
                console.error("Failed to fetch list items:", error);
            }
        };

        void getSpfxListItems();
    }, []);

    return (
        <div>
            <h1>Back View</h1>
            {listItems.map((item) => (
                <div key={item.Id}>{item.Title}</div>
            ))}
        </div>
    );
};

export default BackView;