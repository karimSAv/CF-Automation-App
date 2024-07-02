import * as React from 'react';
import SectionContainer from './SectionContainer';
import { CFContext } from '../../../../context/CFContext';
import { DateInput, FileInput, SelectInput, TextInput } from '../FormInputs';
import { InputSection } from '../FormInputs';
import { Slider } from '@mui/material';
import { InputLabel } from '../CreateForm';



const BasicInfoSection = () => {

    const {
        isSubmitted,
        codeFirm,
        dateDebut,
        dateFin,
        libelle,
        reduction,
        setCodeFirm,
        setDateDebut,
        setDateFin,
        setLibelle,
        setReduction,
    } = React.useContext(CFContext);

    return (
        <SectionContainer>
            <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: "1rem" }}>

                <TextInput
                    label='Code Firme'
                    isOptional={false}
                    value={codeFirm}
                    onChange={(e) => setCodeFirm(e.target.value)}
                    type='number'
                    max={9999}
                    maxLength={4}
                    isWrongInput={isSubmitted && codeFirm.length !== 4}
                />
                <DateInput label='Date début' value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
                <DateInput label='Date fin' value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
                <TextInput label='Libellé' isOptional={false} value={libelle} onChange={(e) => setLibelle(e.target.value)} />

                <InputSection>
                    <InputLabel label='Reduction' isOptional={false} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div style={{ display: "flex", gap: "2rem" }}>
                        <Slider
                            defaultValue={0}
                            aria-label="Reduction"
                            valueLabelDisplay="auto"
                            step={1}
                            min={-100}
                            max={100}
                            value={reduction}
                            onChange={(e: Event, value: number | number[]) => setReduction(value as number)}
                        />
                        <input
                            type="number"
                            value={reduction}
                            onChange={(e) => setReduction(parseInt(e.target.value))}
                            style={{
                                border: "none",
                                backgroundColor: "#f2f2f2",
                                padding: "0.5rem",
                                width: "5rem"
                            }}
                        />
                    </div>
                </InputSection>
            </div>
        </SectionContainer>
    )
};

export default BasicInfoSection;
