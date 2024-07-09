import { HttpClient } from '@microsoft/sp-http';
import * as React from 'react';
import toast from 'react-hot-toast';

type CFContextProps = {
    httpClient: HttpClient | undefined;
    isShowFinalScreen: boolean;
    setIsShowFinalScreen: React.Dispatch<React.SetStateAction<boolean>>;
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
    isShowFinalScreen: false,
    setIsShowFinalScreen: noOp,
    isSubmitted: false,
    setIsSubmitted: noOp,
    isShowPreview: false,
    setIsShowPreview: noOp,
    currentTab: 2,
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

const CFContextProvider = ({ children, httpClient }: { children: React.ReactNode, httpClient: HttpClient }) => {

    const [dateFin, setDateFin] = React.useState('');
    const [libelle, setLibelle] = React.useState('');
    const [prodIMS, setProdIMS] = React.useState([]);
    const [prodABS, setProdABS] = React.useState([]);
    const [comment, setComment] = React.useState('');
    const [codeFirm, setCodeFirm] = React.useState('');
    const [reduction, setReduction] = React.useState(0);
    const [dateDebut, setDateDebut] = React.useState('');
    const [garanties, setGaranties] = React.useState([]);
    const [currentTab, setCurrentTab] = React.useState(2);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [destinataires, setDestinataires] = React.useState([]);
    const [isGrignotage, setIsGrignotage] = React.useState(false);
    const [isShowPreview, setIsShowPreview] = React.useState(false);
    const [isShowFinalScreen, setIsShowFinalScreen] = React.useState(false);
    const [codesIntermediaires, setCodesIntermediaires] = React.useState('');
    const [file, setFile] = React.useState<string | number | readonly string[] | undefined>(undefined);


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
    };

    const getFormattedGaranties = () => {
        let formattedGarantiesArray = garanties.map((garantie: string) =>
            garantie.split(' - ')[0]
        );

        return formattedGarantiesArray.join(' / ');
    };

    const getQuery = (): string => {
        const query = `
            --Imp<br>
                INSERT INTO BABS.TFR1_FIRMCOD_IMP (FR1_FC_IMP#,FR1_CD_FIRMCOD,FR1_NOM_FIRMCOD,GILTAB,GILTBIS,FR1_CD_TYP_ASSUR,FR1_TX_MAX_RED,FR1_CD_CTXT_AFF_FC,FR1_TX_PLAN_RED)
                VALUES ('761f82f8-fbc6-11ee-a7ea-005056a76fae', ${codeFirm}, ${libelle}, ${dateDebut},${dateFin},'N',0.000,'  ',0.000);
                <br>
                <br>

            --PROD<br>
                
                INSERT INTO BABS.TFR1_FIRMCOD_PROD (FR1_FC_IMP#,HSPP#)
                VALUES ('761f82f8-fbc6-11ee-a7ea-005056a76fae','e63c52c5-1519-11ea-9115-c85b76b3e3a6');

                <br>

                INSERT INTO BABS.TFR1_FIRMCOD_PROD (FR1_FC_IMP#,HSPP#) 
                VALUES ('761f82f8-fbc6-11ee-a7ea-005056a76fae','21f38281-1237-11eb-83d2-a86daa4cc1c4');

                <br>
                <br>

            --CRIT<br>

                INSERT INTO BABS.TFR1_FIRMCOD_CRIT (FR1_FC_CRIT#,FR1_FC_IMP#,FR1_NOM_TAB_COL,FR1_NOM_DON_COMP,FR1_NOM_DOM_COL,FR1_NOM_DOM_VAL,FR1_CD_TYP_OP,FR1_LST_VAL_CRI_FC,FR1_NU_CLUSTER,FR1_NON_PERT_AVT) 
                VALUES ('5ad2764e-fbf9-11ee-91a9-005056a76fae','761f82f8-fbc6-11ee-a7ea-005056a76fae','FirmCodDiscountMax','','','','         ', ${reduction} ,1,' ');
                
                <br>

                INSERT INTO BABS.TFR1_FIRMCOD_CRIT (FR1_FC_CRIT#,FR1_FC_IMP#,FR1_NOM_TAB_COL,FR1_NOM_DON_COMP,FR1_NOM_DOM_COL,FR1_NOM_DOM_VAL,FR1_CD_TYP_OP,FR1_LST_VAL_CRI_FC,FR1_NU_CLUSTER,FR1_NON_PERT_AVT) 
                VALUES ('5ad282b0-fbf9-11ee-91a9-005056a76fae','761f82f8-fbc6-11ee-a7ea-005056a76fae','TVERTRAG.AUSFGRUND1','','','','In        ', ${getFormattedGaranties()} ,1,' ');
                
                <br>

                INSERT INTO BABS.TFR1_FIRMCOD_CRIT (FR1_FC_CRIT#,FR1_FC_IMP#,FR1_NOM_TAB_COL,FR1_NOM_DON_COMP,FR1_NOM_DOM_COL,FR1_NOM_DOM_VAL,FR1_CD_TYP_OP,FR1_LST_VAL_CRI_FC,FR1_NU_CLUSTER,FR1_NON_PERT_AVT) 
                VALUES ('5ad2840e-fbf9-11ee-91a9-005056a76fae','761f82f8-fbc6-11ee-a7ea-005056a76fae','TSACHE.TYP','','','','In        ','KFZ0041',1,' ');

                <br>

                INSERT INTO BABS.TFR1_FIRMCOD_CRIT (FR1_FC_CRIT#,FR1_FC_IMP#,FR1_NOM_TAB_COL,FR1_NOM_DON_COMP,FR1_NOM_DOM_COL,FR1_NOM_DOM_VAL,FR1_CD_TYP_OP,FR1_LST_VAL_CRI_FC,FR1_NU_CLUSTER,FR1_NON_PERT_AVT) 
                VALUES ('5ad28558-fbf9-11ee-91a9-005056a76fae','761f82f8-fbc6-11ee-a7ea-005056a76fae','TVERTRAG.WERBERNR','','','','In        ', ${codesIntermediaires},1,' ');
                "
            `;

        return query;
    };

    return (
        <CFContext.Provider value={{
            httpClient,
            isShowFinalScreen,
            setIsShowFinalScreen,
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
