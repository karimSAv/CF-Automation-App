import * as React from 'react';
import PreviewTab from './components/PreviewTab';
import CreateForm from './components/CreateForm';
import ModifyForm from './components/ModifyForm';
import { CFContext } from '../../context/CFContext';
import FinalScreen from './components/FinalScreen';

const Form = () => {

    const { isShowFinalScreen, isShowPreview, currentTab, handleSubmitForm } = React.useContext(CFContext);

    if(isShowFinalScreen) return (<FinalScreen />)

    if (isShowPreview) return <PreviewTab />;

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            {currentTab === 0 ? <CreateForm /> : <ModifyForm />}
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <button
                    onClick={() => {
                        handleSubmitForm();
                        window.scrollTo(0, 0);
                    }}
                    style={{
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

export default Form;