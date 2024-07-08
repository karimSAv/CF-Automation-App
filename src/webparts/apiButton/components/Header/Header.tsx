import * as React from 'react';
import { CFContext } from '../../context/CFContext';
import { createJiraTicket } from '../../../../services/httpRequests/Jira';

const tabs = {
    0: "Créer",
    1: "Modifier"
}

const TabSwitcher = ({ switcherTabs, currentTab, setCurrentTab }: {
    switcherTabs: { [key: number]: string },
    currentTab: number,
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>
}) => {


    return (
        <div style={{ display: "flex", gap: "1rem" }}>
            {Object.keys(switcherTabs).map((key: string) => (
                <span
                    onClick={() => setCurrentTab(Number(key))}
                    style={{
                        textDecoration: currentTab === Number(key) ? "underline" : "none",
                        fontWeight: currentTab === Number(key) ? "bold" : "normal",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "1.2rem"
                    }}
                    key={key}
                >
                    {switcherTabs[Number(key)]}
                </span>
            ))}
        </div>
    )
};

const Header = () => {

    const { currentTab, setCurrentTab, isShowPreview, setIsShowPreview, httpClient } = React.useContext(CFContext);

    const handleSubmit = async () => {
        await createJiraTicket(httpClient, {
            'ticketTitle': "finallllllyyyy",
            'description': "this is the description"
        });
    };

    const handleSave = async () => {
        if (!isShowPreview) {
            setIsShowPreview(true);
            return;
        }

        await handleSubmit();
    };

    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                backgroundColor: "#007ab0",
                padding: "1rem",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between"
            }}
        >
            {isShowPreview ?
                <button
                    onClick={() => setIsShowPreview(false)}
                    style={{
                        color: "white",
                        backgroundColor: "red",
                        border: "none",
                        padding: "0.6rem 1.2rem",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}>back</button>
                : <TabSwitcher switcherTabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />}
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    gap: "1rem",
                    justifyContent: "flex-end",
                }}
            >
                {!isShowPreview && <button
                    style={{
                        color: "white",
                        backgroundColor: "red",
                        border: "none",
                        padding: "0.6rem 1.2rem",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Effacer tous les champs
                </button>}
                <button
                    onClick={handleSave}
                    style={{
                        color: "white",
                        backgroundColor: "transparent",
                        border: "1px solid white",
                        padding: "0.6rem 1.2rem",
                        borderRadius: "5px",
                        cursor: "pointer",

                    }}
                >
                    Sauvegarder
                </button>
            </div>
        </div>
    )
};

export default Header;