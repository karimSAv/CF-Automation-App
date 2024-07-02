import { HttpClient } from '@microsoft/sp-http';
import * as React from 'react';
import toast from 'react-hot-toast';

type CFContextProps = {
    httpClient: HttpClient | undefined;
    isSubmitted: boolean;
    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
    isShowPreview: boolean;
    setIsShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
    currentTab: number;
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
    codeFirm: string;
    setCodeFirm: React.Dispatch<React.SetStateAction<string>>;
    dateDebut: string;
    setDateDebut: React.Dispatch<React.SetStateAction<string>>;
    dateFin: string;
    setDateFin: React.Dispatch<React.SetStateAction<string>>;
    libelle: string;
    setLibelle: React.Dispatch<React.SetStateAction<string>>;
    reduction: number;
    setReduction: React.Dispatch<React.SetStateAction<number>>;
    prodIMS: string[];
    setProdIMS: React.Dispatch<React.SetStateAction<string[]>>;
    prodABS: string[];
    setProdABS: React.Dispatch<React.SetStateAction<string[]>>;
    codesIntermediaires: string;
    setCodesIntermediaires: React.Dispatch<React.SetStateAction<string>>;
    file: string | number | readonly string[] | undefined;
    setFile: React.Dispatch<React.SetStateAction<string | number | readonly string[] | undefined>>;
    garanties: string[];
    setGaranties: React.Dispatch<React.SetStateAction<string[]>>;
    isGrignotage: boolean;
    setIsGrignotage: React.Dispatch<React.SetStateAction<boolean>>;
    comment: string;
    setComment: React.Dispatch<React.SetStateAction<string>>;
    destinataires: string[];
    setDestinataires: React.Dispatch<React.SetStateAction<string[]>>;
    handleSubmitForm: () => void;
}

// Provide a no-op function for setCurrentTab
const noOp = () => console.log("No-op function");

// Provide default values for the context
const CFContext = React.createContext<CFContextProps>({
    httpClient: undefined,
    isSubmitted: false,
    setIsSubmitted: noOp,
    isShowPreview: false,
    setIsShowPreview: noOp,
    currentTab: 0,
    setCurrentTab: noOp,
    codeFirm: '',
    setCodeFirm: noOp,
    dateDebut: '',
    setDateDebut: noOp,
    dateFin: '',
    setDateFin: noOp,
    libelle: '',
    setLibelle: noOp,
    reduction: 0,
    setReduction: noOp,
    prodIMS: [],
    setProdIMS: noOp,
    prodABS: [],
    setProdABS: noOp,
    codesIntermediaires: '',
    setCodesIntermediaires: noOp,
    file: '',
    setFile: noOp,
    garanties: [],
    setGaranties: noOp,
    isGrignotage: false,
    setIsGrignotage: noOp,
    comment: '',
    setComment: noOp,
    destinataires: [],
    setDestinataires: noOp,
    handleSubmitForm: noOp,

});

const CFContextProvider = ({ children, httpClient}: { children: React.ReactNode, httpClient: HttpClient }) => {

    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const [isShowPreview, setIsShowPreview] = React.useState(false);
    const [currentTab, setCurrentTab] = React.useState(0);
    
    const [codeFirm, setCodeFirm] = React.useState('');
    const [dateDebut, setDateDebut] = React.useState('');
    const [dateFin, setDateFin] = React.useState('');
    const [libelle, setLibelle] = React.useState('');
    const [reduction, setReduction] = React.useState(0);
    const [prodIMS, setProdIMS] = React.useState([]);
    const [prodABS, setProdABS] = React.useState([]);
    const [codesIntermediaires, setCodesIntermediaires] = React.useState('');
    const [file, setFile] = React.useState<string | number | readonly string[] | undefined>(undefined);
    const [garanties, setGaranties] = React.useState([]);
    const [isGrignotage, setIsGrignotage] = React.useState(false);
    const [comment, setComment] = React.useState('');
    const [destinataires, setDestinataires] = React.useState([]);


    const chechFields = () => {
        if (codeFirm === '') toast.error('Code Firm est demandé');
        if (dateDebut === '') toast.error('Date Debut est demandée');
        if (dateFin === '') toast.error('Date Fin est demandée');
        if (libelle === '') toast.error('Libelle est demandé');
        if (reduction === 0) toast.error('Reduction est demandée');

        return codeFirm !== '' && dateDebut !== '' && dateFin !== '' && libelle !== '' && reduction !== 0;
    };

    const handleSubmitForm = () => {
        const allGood = chechFields();
        if (!allGood) return;
        toast.success('Form submitted successfully');

        setIsShowPreview(true);
    }

    return (
        <CFContext.Provider value={{
            httpClient,
            isSubmitted,
            setIsSubmitted,
            isShowPreview,
            setIsShowPreview,
            currentTab,
            setCurrentTab,
            codeFirm,
            setCodeFirm,
            dateDebut,
            setDateDebut,
            dateFin,
            setDateFin,
            libelle,
            setLibelle,
            reduction,
            setReduction,
            prodIMS,
            setProdIMS,
            prodABS,
            setProdABS,
            codesIntermediaires,
            setCodesIntermediaires,
            file,
            setFile,
            garanties,
            setGaranties,
            isGrignotage,
            setIsGrignotage,
            comment,
            setComment,
            destinataires,
            setDestinataires,
            handleSubmitForm,
        }}>
            {children}
        </CFContext.Provider>
    );
};

export { CFContext, CFContextProvider };
