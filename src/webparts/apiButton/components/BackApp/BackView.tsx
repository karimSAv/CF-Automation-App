import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import * as React from "react";
import { getSP } from "../../utils/pnpjsConfig";
import RequestDetails from "./components/RequestDetails";

const BackView = () => {
    const [listItems, setListItems] = React.useState([] as any[]);

    const [selectedItem, setSelectedItem] = React.useState(null);

    React.useEffect(() => {
        const getItems = async () => {
            try {
                const items = await getSP().web.lists.getByTitle("CodesFirmes").items();
                setListItems(items);
                console.log("Fetched items:", items);
            } catch (error) {
                console.error("Failed to fetch list items:", error);
            }
        };

        getItems().catch(error => console.error("Failed to execute getItems:", error));
    }, []);

    if(selectedItem) return (
        <RequestDetails selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    )

    return (
        <div style={{
            gap: "1rem",
            display: "flex",
            fontSize: "1.2rem",
            flexDirection: "column",
        }}>
            <h1>All Requests :</h1>
            {listItems.splice(0, listItems.length - 1).map((item, index) => (
                <div
                    key={item.Id}
                    style={{
                        display: "flex",
                        backgroundColor: "white",
                        padding: "1.2rem 2.4rem",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "grey",
                            width: "2rem",
                            borderRadius: "50%",
                            color: "white",
                            height: "2rem",
                            fontWeight: "bold",
                            fontSize: "1rem",
                        }}>
                        <span>{index + 1}</span>
                    </div>
                    <span>{item.Title}</span>
                    <span>{item.creation_date}</span>
                    <span>{item.isTested}</span>
                    <span>{item.committed ? "yes" : "no"}</span>
                    <button
                        onClick={() => setSelectedItem(item)}
                        style={{
                            backgroundColor: "#007ab3",
                            color: "white",
                            border: "none",
                            padding: "0.8rem 1.2rem",
                            cursor: "pointer",
                            borderRadius: "15px",
                        }}
                    >
                        {"view more"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default BackView;