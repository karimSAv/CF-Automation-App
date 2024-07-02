import * as React from "react";
import { CFContext } from "../../context/CFContext";
import { Step, StepLabel, Stepper } from "@mui/material";

const ProgressBar = () => {

    const { isShowPreview } = React.useContext(CFContext);

    const steps = React.useMemo(() =>
        [{
            label: "Remplir les infos de la demande",
            isCurrent: !isShowPreview,
            isDone: isShowPreview,
        },
        {
            label: "Vérifie tous les champs",
            isCurrent: isShowPreview,
            isDone: false
        },
        {
            label: "Demande envoyée !",
            isCurrent: false,
            isDone: false
        }]
    , [isShowPreview])

    return (
        <Stepper activeStep={steps.findIndex(step => step.isCurrent)} alternativeLabel style={{ marginBottom: "2rem"}}>
            {steps.map((step, index) => (
                <Step key={index} completed={step.isDone}>
                    <StepLabel>{step.label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
};

export default ProgressBar;