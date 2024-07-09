import * as React from "react";

const RequestDetails = ({selectedItem, setSelectedItem}:
    {
        selectedItem: any;
        setSelectedItem: React.Dispatch<React.SetStateAction<any>>;
    }
) => {
    return (
        <div>
            <h1>Request Details</h1>
            <div>
                <span>Code : {selectedItem.Title}</span>
                <p>query: {selectedItem.query}</p>
            </div>
        </div>
    )
}

export default RequestDetails;