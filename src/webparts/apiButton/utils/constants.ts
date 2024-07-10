export const ADDITIONAL_EMAILS = [
    'olivier.guily@allianz.fr',
    'annette.marteau_2@allianz.com',
    'christine.mouthon@allianz.fr',
    'laurence.serant@allianz.fr'
];

export const GARANTIE_CSP = [
    "G01- Conclusion Application",
    "G02- Réintegration de la couverture",
    "G08- Annulation",
    "G14- Amendement technique",
    "G66- Chargement véhicule",
    "G76- Subrogation du contract avec même N Contract",
    "G80- Avenant contrat",
    "GBA- ",
    "G99- Contrôle bloquant"
];

export const IMS_PRODS = ["VP","AC101","AC201"];

export const DEFAULT_DEST = [
    {
        email: "descssi@allianz.fr",
        canBeRemoved: false
    },
    {
        email: "topauto@allianz.fr",
        canBeRemoved: false
    },
    {
        email: "externe.quentin.caillet@allianz.com",
        canBeRoemoved: false
    }
];

export const REQUEST_STATUS = {
    JUST_RECEIVED: "reçu",
    VALIDATED: "validé",
    COMMITTED: "commité",
};

export const STATUS_COLORS = {
    [REQUEST_STATUS.JUST_RECEIVED]: "#FFE5B4",
    [REQUEST_STATUS.VALIDATED]: "lightBlue",
    [REQUEST_STATUS.COMMITTED]: "#3cb371",
};