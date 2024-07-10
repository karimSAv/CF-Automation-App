import * as React from "react";
import { getSP } from "../../../utils/pnpjsConfig";
import { REQUEST_STATUS, STATUS_COLORS } from "../../../utils/constants";

const RequestDetails = ({ selectedItem, setSelectedItem }:
    {
        selectedItem: any;
        setSelectedItem: React.Dispatch<React.SetStateAction<any>>;
    }
) => {

    console.log("Selected item:", selectedItem);

    const validateRequest = async () => {
        try {
            console.log("Validating request:", selectedItem);
            await getSP().web.lists.getByTitle("CodesFirmes").items.getById(selectedItem.Id).update({
                isTested: REQUEST_STATUS.VALIDATED,
            });
            window.location.reload();
        } catch (error) {
            console.error("Failed to validate request:", error);
        }
    };

    const commitRequest = async () => {
        try {
            console.log("Committing request:", selectedItem);
            await getSP().web.lists.getByTitle("CodesFirmes").items.getById(selectedItem.Id).update({
                isTested: REQUEST_STATUS.COMMITTED,
                committed: true,
            });
            window.location.reload();
        } catch (error) {
            console.error("Failed to commit request:", error);
        }
    };

    return (
        <div>
            <button
                style={{
                    border: "none",
                    color: "#007ab3",
                    cursor: "pointer",
                    width: "fit-content",
                }}
                onClick={() => setSelectedItem(null)}>Back</button>
            <h1>Request Details</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                <div style={{ display: "flex", gap: "2rem" }}>
                    <span>Code:</span>
                    <span>{selectedItem.Title}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                    <span>Status:</span>
                    <div style={{ display: "flex", alignItems: "center", padding: "0.4rem 0.8rem", backgroundColor: STATUS_COLORS[selectedItem.isTested], borderRadius: "4rem" }}>
                        <span style={{ fontWeight: "600" }}>{selectedItem.isTested}</span>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "2rem" }}>
                    <p>Query:</p>
                    <textarea
                        value={selectedItem.query}
                        style={{ width: "100%", height: "10rem", padding: "0.5rem", resize: "none" }}
                        disabled={true}
                    />
                </div>
            </div>
            <div style={{ display: "flex", paddingTop: "2rem", gap: "1rem" }}>
                {selectedItem.isTested === REQUEST_STATUS.JUST_RECEIVED &&
                    <button
                        onClick={validateRequest}
                        style={{
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                            width: "fit-content",
                            padding: "0.8rem 1.2rem",
                            backgroundColor: "#03AC13",
                            borderRadius: "15px",
                        }}
                    >
                        {"valider"}
                    </button>
                }
                {selectedItem.isTested === REQUEST_STATUS.VALIDATED &&
                    <button
                        onClick={commitRequest}
                        style={{
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                            width: "fit-content",
                            padding: "0.8rem 1.2rem",
                            backgroundColor: "#007ab3",
                            borderRadius: "15px",
                        }}
                    >
                        {"committer"}
                    </button>
                }
            </div>
        </div>
    )
}

export default RequestDetails;