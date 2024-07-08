import * as React from 'react';
import { CFContext } from '../../../context/CFContext';

const FinalScreen = () => {

    const {setIsShowFinalScreen, setIsShowPreview} = React.useContext(CFContext);

    const handleNewRequest = () => {
        setIsShowFinalScreen(false);
        setIsShowPreview(false);
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <img src={require<string>('../../../assets/deal.svg')} alt="logo" style={{ width: "30rem" }} />
            <h1>Merci pour votre demande :)</h1>
            <button
                onClick={handleNewRequest}
                style={{
                    padding: "0.8rem 1.2rem",
                    backgroundColor: "#007ab3",
                    border: "none",
                    color: "white",
                    width: "fit-content",
                    cursor: "pointer",
                }}
            >
                Nouvelle demande
            </button>
        </div>
    );
};

export default FinalScreen;