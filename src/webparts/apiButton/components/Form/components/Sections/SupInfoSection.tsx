import * as React from 'react';
import SectionContainer from "./SectionContainer";
import { SelectInput, TextInput } from '../FormInputs';
import { GARANTIE_CSP, IMS_PRODS } from '../../../../utils/constants';
import { InputLabel } from '../CreateForm';
import { SelectChangeEvent } from '@mui/material';
import { CFContext } from '../../../../context/CFContext';


const SupInfoSection = () => {

    const { prodIMS, prodABS, setProdABS, setProdIMS, garanties, setGaranties } = React.useContext(CFContext);

    const handleChangeABS = (event: SelectChangeEvent) => {
        const {
            target: { value },
        } = event;
        setProdABS(typeof value === 'string' ? value.split(',') : value);
    };

    const handleChangeIMS = (event: SelectChangeEvent) => {
        const {
            target: { value },
        } = event;
        setProdIMS(typeof value === 'string' ? value.split(',') : value);
    };


    return (
        <SectionContainer>
            <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: "1rem" }}>
                <SelectInput
                    label='IMS : Produit / Type de véhicule / usage'
                    options={IMS_PRODS}
                    selectProps={{
                        multiple: true,
                        value: prodIMS,
                        onChange: handleChangeIMS,
                    }}
                />
                <SelectInput
                    label='ABS : Produit / Type de véhicule / usage'
                    options={IMS_PRODS}
                    selectProps={{
                        multiple: true,
                        value: prodABS,
                        onChange: handleChangeABS,
                    }}
                />
                <TextInput label='Affaires Nouvelles / Avenant' />
                <SelectInput
                    label='Garantie CSP'
                    options={GARANTIE_CSP}
                    selectProps={{
                        multiple: true,
                        value: garanties,
                        onChange: (event: SelectChangeEvent) => {
                            const {
                                target: { value },
                            } = event;
                            setGaranties(typeof value === 'string' ? value.split(',') : value);
                        },
                    }}
                />
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <input
                        type="checkbox"
                        style={{
                            width: "1rem",
                            height: "1rem",
                        }}
                    />
                    <InputLabel label='Grignotage' />
                </div>
            </div>
        </SectionContainer>
    )
}

export default SupInfoSection;