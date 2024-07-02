import * as React from "react";
import { CFContext } from "../../context/CFContext";

const VerticalNavBar = () => {

    const { currentTab, setCurrentTab } = React.useContext(CFContext);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "20rem",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 2px rgba(215,222,228,255)",
        }}>
            <button
                onClick={() => setCurrentTab(0)}
                style={{
                    display: "flex",
                    padding: "1rem 6rem",
                    width: "100%",
                    border: "none",
                    backgroundColor: currentTab === 0 ? "#007ab3" : "#ffffff",
                    color: currentTab === 0 ? "white" : "#697f90",
                }}>
                Création
            </button>
            <button
                onClick={() => setCurrentTab(1)}
                style={{
                    display: "flex",
                    padding: "1rem 6rem",
                    width: "100%",
                    border: "none",
                    backgroundColor: currentTab === 1 ? "#007ab3" : "#ffffff",
                    color: currentTab === 1 ? "white" : "#697f90",
                }}>
                Modification
            </button>

        </div>
    )
}

export default VerticalNavBar;