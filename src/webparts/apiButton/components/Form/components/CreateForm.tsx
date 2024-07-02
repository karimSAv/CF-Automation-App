import * as React from 'react';
import SupInfoSection from './Sections/SupInfoSection';
import BasicInfoSection from './Sections/BasicInfoSection';
import CodeIntermSection from './Sections/CodeIntermSection';
import HelpfulAddsSection from './Sections/HelpfulAddsSection';

export const InputLabel = ({ label, isOptional = true }: { label: string, isOptional?: boolean }) => {
    return (
        <div>
            <span style={{color: "#697f90", fontWeight: "bold", fontSize: "1.2rem"}}>{label}</span>
            {!isOptional && <span style={{ color: "red", fontSize: "1rem" }}> *</span>}
        </div>
    )
}

export const InputSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {children}
        </div>
    )
};

const Separator = ({ style }: { style?: React.CSSProperties }) => {
    return (
        <div style={{ width: "100%", height: "2px", backgroundColor: "#007ab3", marginBottom: "1rem", ...style }} />
    )
};

const CreateForm = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <BasicInfoSection />
            <CodeIntermSection />
            <SupInfoSection/>
            <HelpfulAddsSection/>
        </div>
    )
};

export default CreateForm;
