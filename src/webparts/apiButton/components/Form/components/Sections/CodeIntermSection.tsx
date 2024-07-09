import * as React from 'react';
import { InputLabel } from '../FormInputs';
import SectionContainer from './SectionContainer';
import CIFormatingPopup from '../../../Popups/CIFormatingPopup';
import { CFContext } from '../../../../context/CFContext';



const CodeIntermSection = () => {

    const inputRef = React.useRef<HTMLInputElement>(null);

    const [isCIFormatingPopupOpen, setIsCIFormatingPopupOpen] = React.useState(false);
    const { codesIntermediaires, setCodesIntermediaires } = React.useContext(CFContext);

    const splittedCodes = React.useMemo(() =>
        codesIntermediaires.split("/").filter(code => code !== ""),
        [codesIntermediaires]);

    return (
        <SectionContainer>
            <div>
                <InputLabel label={"Codes intermédiaires"} isOptional />
                <p>Les codes intermédiaires doivent être séparés par un "/", oubien formatter les en appuyant sur le bouton ci-dessous.</p>
                <div style={{ display: "flex", gap: "0.5rem", margin: "0.5rem 0" }}>
                    <input
                        ref = {inputRef}
                        type="text"
                        style={{
                            border: "none",
                            display: "flex",
                            flex: 1,
                            backgroundColor: "#f2f2f2",
                            padding: "0.5rem",
                        }} />
                    <button
                        onClick={() => {
                            setCodesIntermediaires(inputRef.current?.value || "");
                        }}
                        style={{
                            border: "none",
                            backgroundColor: "#007ab3",
                            color: "white",
                            padding: "0.5rem",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                        disabled={inputRef.current?.value === ""}
                    >
                        Ajouter
                    </button>
                    <button
                        onClick={() => {
                            if (inputRef.current)
                                inputRef.current.value = "";

                            setCodesIntermediaires("");
                        }}
                        style={{
                            border: "none",
                            backgroundColor: "red",
                            color: "white",
                            padding: "0.5rem",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Effacer
                    </button>
                </div>
                <div style={{
                    height: "6rem",
                    border: "1px dashed #007ab3",
                    display: "flex",
                    gap: "0.5rem",
                    padding: "0.5rem",
                    flexWrap: "wrap",
                    overflowY: "scroll",
                }}>
                    {
                        !splittedCodes.length ? (
                            <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>{"T'as pas de codes à ajouter"}</div>
                        ) : splittedCodes.map((code, index) => (
                            <div key={index} style={{ display: "flex", padding: "0.5rem 1rem", height: "1.5rem", backgroundColor: "lightBlue", borderRadius: "5px", gap: "0.8rem", justifyContent: "center", alignItems: "center" }}>
                                <span>{code}</span>
                                <button
                                    onClick={() => {
                                        const newCodes = splittedCodes.filter((_, i) => i !== index).join("/");
                                        setCodesIntermediaires(newCodes);
                                    }}
                                    style={{
                                        border: "none",
                                        color: "red",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <button
                        onClick={() => setIsCIFormatingPopupOpen(true)}
                        style={{
                            marginTop: "0.5rem",
                            border: "none",
                            backgroundColor: "#007ab3",
                            color: "white",
                            padding: "0.5rem",
                            borderRadius: "5px",
                        }}
                    >
                        formatter des codes
                    </button>
                    {!!splittedCodes.length && <span>t'as {splittedCodes.length} codes intermédiaires</span>}
                </div>
            </div>
            <CIFormatingPopup isOpen={isCIFormatingPopupOpen} onClose={() => setIsCIFormatingPopupOpen(false)} />
        </SectionContainer>
    )
};

export default CodeIntermSection;
