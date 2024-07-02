import * as React from 'react';

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ flex: 1, padding: "1rem", gap: "2rem", backgroundColor: "#ffffff", boxShadow: "0 0 2px rgba(215,222,228,255)" }}>
            {children}
        </div>
    )
};

export default SectionContainer;