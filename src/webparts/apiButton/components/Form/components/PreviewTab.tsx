import * as React from 'react';
import { CFContext } from '../../../context/CFContext';


const PreviewSection = ({ title, value }: { title: string, value: string }) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem", margin: "1rem 0rem" }}>
            <span style={{ fontWeight: "bold" }}>{title}: </span>
            <span>{value}</span>
        </div>

    )
}

const PreviewTab = () => {

    const {
        codeFirm,
        dateDebut,
        dateFin,
        libelle,
        reduction,
        prodIMS,
        prodABS,
        codesIntermediaires,
        file,
        garanties,
        isGrignotage,
        comment,
        destinataires,
    } = React.useContext(CFContext);


    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem", backgroundColor: "#ffffff", padding: "4rem" }}>
            <div style={{width: "50%"}}>
                <PreviewSection title="Code Firm" value={codeFirm} />
                <PreviewSection title="Date Debut" value={dateDebut} />
                <PreviewSection title="Date Fin" value={dateFin} />
                <PreviewSection title="Libelle" value={libelle} />
                <PreviewSection title="Reduction" value={reduction.toString() + "%"} />
                <PreviewSection title="Prod IMS" value={prodIMS.join('/')} />
                <PreviewSection title="Prod ABS" value={prodABS.join('/')} />
                <PreviewSection title="Garanties" value={garanties.join('/')} />
            </div>
            <div style={{width: "50%"}}>
                <PreviewSection title="Codes Intermediaires" value={codesIntermediaires} />
                <PreviewSection title="File" value={file?.toString() || ""} />
                <PreviewSection title="Grignotage" value={isGrignotage? "oui": "non"} />
                <PreviewSection title="Commentaire" value={comment} />
                <PreviewSection title="Destinataires" value={destinataires.join('/')} />
            </div>
        </div>
    )
};

export default PreviewTab;