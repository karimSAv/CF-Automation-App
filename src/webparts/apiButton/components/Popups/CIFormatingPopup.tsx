import * as React from "react";
import { X } from "lucide-react";
import { Dialog } from "@mui/material";

const CIFormatingPopup = ({
    isOpen,
    onClose
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {

    const [inputValue, setInputValue] = React.useState<string>("");

    const formattedCodes = React.useMemo(() => {
        return inputValue.split(`\n`).map((code) => code.trim()).join("/");
    },[inputValue]);

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            PaperProps={{
                style: {
                    width: "45%",
                    margin: "auto",
                    padding: "2rem 3rem",
                    fontFamily: "Segoe UI"
                }
            }}
        >
            <button 
                style={{
                    border: "1px solid #000000",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "2rem",
                    height: "2rem",
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    cursor: "pointer"
                }}
                 onClick={onClose}
            >
                <X size={24} />
            </button>
            <div>
                <h3>Formatter les codes intermédiaires</h3>
                <p>Coller les codes désirés dans la section gauche, et récupérer la version formatté </p>
                <div style={{display: "flex", gap: "1rem"}}>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        border: "1px dashed #007ab3",
                        height: "20rem"
                    }}>
                        <textarea
                            style={{
                                width: "100%",
                                border: "none",
                                padding: "1rem",
                                resize: "none"
                            }}
                            value={inputValue}
                            onChange={(e) => { 
                                setInputValue(e.target.value);
                            }}
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        border: "1px dashed #007ab3",
                        height: "20rem",
                        flexWrap: "wrap",
                        overflow: "auto",
                    }}>
                        <span>{formattedCodes}</span>
                    </div>
                </div>
                <button
                    style={{
                        border: "none",
                        backgroundColor: "#007ab3",
                        color: "white",
                        padding: "0.5rem",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginTop: "1rem"
                    }}
                    onClick={async() => {
                        onClose();
                        await navigator.clipboard.writeText(formattedCodes);
                    }}
                >
                    Copier le code formatté
                </button>
            </div>
        </Dialog>
    )
};

export default CIFormatingPopup;