import * as React from "react";
import { MenuItem, Select, SelectProps } from "@mui/material";

export const InputLabel = ({ label, isOptional = true }: { label: string, isOptional?: boolean }) => {
    return (
        <div>
            <span style={{ color: "#697f90", fontWeight: "bold", fontSize: "1.2rem" }}>{label}</span>
            {!isOptional && <span style={{ color: "red", fontSize: "1rem" }}> *</span>}
        </div>
    )
};

export const InputSection = ({ style, children }: { style?: React.CSSProperties, children: React.ReactNode }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "1rem", border: `1px solid #ebedee`, ...style }}>
            {children}
        </div>
    )
};

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isWrongInput?: boolean;
    isOptional?: boolean;
}

export const TextInput = ({ label, isOptional = true, isWrongInput = false, ...props }: TextInputProps) => {
    return (
        <InputSection style={{ border: `1px solid ${isWrongInput ? "#dc3e3f" : "#ebedee"}` }}>
            <InputLabel label={label} isOptional={isOptional} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <input
                type="text"
                style={{
                    border: "none",
                    backgroundColor: "#f2f2f2",
                    padding: "0.5rem",
                }}
                {...props}
            />
        </InputSection>
    )
}

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isWrongInput?: boolean;
}

export const DateInput = ({ label, isWrongInput = false, ...props }: DateInputProps) => {
    return (
        <InputSection style={{ border: `1px solid ${isWrongInput ? "#dc3e3f" : "#ebedee"}` }}>
            <InputLabel label={label} isOptional={false} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <input
                type="date"
                style={{
                    border: "none",
                    backgroundColor: "#f2f2f2",
                    padding: "0.5rem",
                }}
                {...props}
            />
        </InputSection>
    )
};

export const SelectInput = ({ label, options, isOptional = false, selectProps }: { label: string, options: string[], isOptional?: boolean, selectProps?: SelectProps }) => {
    return (
        <InputSection>
            <InputLabel label={label} isOptional={isOptional} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Select
                style={{
                    border: "none",
                    backgroundColor: "#f2f2f2",
                    height: "2.5rem",
                }}
                {...selectProps}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </InputSection>
    )
};

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const FileInput = ({ label, ...props }: FileInputProps) => {
    return (
        <InputSection>
            <InputLabel label={label} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <input
                multiple
                type="file"
                style={{
                    backgroundColor: "transparent",
                    padding: "0.5rem",
                    height: "4rem",
                    border: "1px dashed #007ab3",
                }} 
                {...props}
                />
        </InputSection>
    )
};