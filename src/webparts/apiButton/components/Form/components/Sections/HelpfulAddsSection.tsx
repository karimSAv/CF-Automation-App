import * as React from 'react';
import SectionContainer from "./SectionContainer";
import { FileInput, InputLabel, InputSection, SelectInput } from '../FormInputs';
import { ADDITIONAL_EMAILS, DEFAULT_DEST } from '../../../../utils/constants';
import { CFContext } from '../../../../context/CFContext';
import { SelectChangeEvent } from '@mui/material';

const HelpfulAddsSection = () => {

    const { destinataires, setDestinataires, comment, setComment, file, setFile } = React.useContext(CFContext);


    return (
        <SectionContainer>
            <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: "1rem" }}>
                <InputSection>
                    <InputLabel label='Commentaire' />
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        style={{
                            border: "none",
                            backgroundColor: "#f2f2f2",
                            padding: "0.5rem",
                            height: "8rem",
                            resize: "none"
                        }}
                    />
                </InputSection>
                <SelectInput
                    label='Destinataires supplémentaires'
                    isOptional
                    options={ADDITIONAL_EMAILS}
                    selectProps={{
                        multiple: true,
                        value: destinataires,
                        onChange: (event: SelectChangeEvent) => {
                            const {
                                target: { value },
                            } = event;
                            setDestinataires(typeof value === 'string' ? value.split(',') : value);
                        },
                    }}
                />
                <FileInput
                    label='Attachments'
                    value={file}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
        </SectionContainer>
    )
}

export default HelpfulAddsSection;