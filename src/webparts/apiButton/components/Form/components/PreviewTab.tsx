import * as React from 'react';
import toast from 'react-hot-toast';
import { CFContext } from '../../../context/CFContext';
import { createJiraTicket } from '../../../../../services/httpRequests/Jira';


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
        httpClient,
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
        setIsShowFinalScreen,
    } = React.useContext(CFContext);

    const handleOnNext = async () => {
        try {
            await createJiraTicket(
                httpClient,
                {
                    ticketTitle: `CREATION CF ${codeFirm}`,
                    description: `Code Firm: ${codeFirm}, \n\n Date Debut: ${dateDebut}, \n\n Date Fin: ${dateFin}, \n\n  Libelle: ${libelle}, \n\n Reduction: ${reduction}% \n\n , Prod IMS: ${prodIMS.join('/')}, \n\n Prod ABS: ${prodABS.join('/')}, \n\n Garanties: ${garanties.join('/')}, \n\n Codes Intermediaires: ${codesIntermediaires}, \n\n File: ${file?.toString() || ""}, \n\n Grignotage: ${isGrignotage ? "oui" : "non"}, \n\n Commentaire: ${comment}, \n\n Destinataires: ${destinataires.join('/')}`
                }
            );
            toast.success("Ticket Jira créé avec succès");
            setIsShowFinalScreen(true);

        } catch (error) {
            toast.error("Error sending email:", error);
        }
    }


    return (
        <div style={{ backgroundColor: "#ffffff", padding: "4rem" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                <div style={{ width: "50%" }}>
                    <PreviewSection title="Code Firm" value={codeFirm} />
                    <PreviewSection title="Date Debut" value={dateDebut} />
                    <PreviewSection title="Date Fin" value={dateFin} />
                    <PreviewSection title="Libelle" value={libelle} />
                    <PreviewSection title="Reduction" value={reduction.toString() + "%"} />
                    <PreviewSection title="Prod IMS" value={prodIMS.join('/')} />
                    <PreviewSection title="Prod ABS" value={prodABS.join('/')} />
                    <PreviewSection title="Garanties" value={garanties.join('/')} />
                </div>
                <div style={{ width: "50%" }}>
                    <PreviewSection title="Codes Intermediaires" value={codesIntermediaires} />
                    <PreviewSection title="File" value={file?.toString() || ""} />
                    <PreviewSection title="Grignotage" value={isGrignotage ? "oui" : "non"} />
                    <PreviewSection title="Commentaire" value={comment} />
                    <PreviewSection title="Destinataires" value={destinataires.join('/')} />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                    onClick={handleOnNext}
                    style={{
                        marginTop: "2rem",
                        padding: "0.8rem 1.2rem",
                        backgroundColor: "#007ab3",
                        border: "none",
                        color: "white",
                        width: "fit-content",
                        cursor: "pointer",
                    }}
                >
                    suivant
                </button>
            </div>
        </div>
    )
};

export default PreviewTab;