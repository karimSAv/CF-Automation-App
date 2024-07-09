import * as React from "react";

const RequestDetails = ({ selectedItem, setSelectedItem }:
    {
        selectedItem: any;
        setSelectedItem: React.Dispatch<React.SetStateAction<any>>;
    }
) => {
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

                <div style={{ display: "flex", gap: "2rem" }}>
                    <p>Query:</p>
                    <textarea
                        value={selectedItem.query}
                        style={{ width: "100%", height: "10rem", padding: "0.5rem", resize: "none" }}
                        disabled={true}
                    />
                </div>
            </div>
            <button
                style={{
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    width: "fit-content",
                    padding: "0.8rem 1.2rem",
                    backgroundColor: "#007ab3",
                }}
            >{"commit"}</button>
        </div>
    )
}

export default RequestDetails;