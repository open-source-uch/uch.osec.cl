// src/data/membersData.ts
export type Member = {
    name: string;
    username: string | null;
    link: string;
    linkedIn?: string | null;
    activePeriods: { year: number; semester: "summer" | "fall" }[]; // Añadido
};

export const members: Member[] = [
    {
        name: "Tomás Villegas",
        username: "tvillega",
        link: "https://github.com/tvillega",
        activePeriods: [
            { year: 2025, semester: "summer" }
        ],
    },
    {
        name: "Cristóbal Stamm",
        username: "cstammp",
        link: "https://github.com/cstammp",
        activePeriods: [
            { year: 2025, semester: "summer" },
            { year: 2025, semester: "fall" }
        ],
    },
    {
        name: "Tomás Cárdenas",
        username: "tcardenasc",
        link: "https://github.com/tcardenasc",
        linkedIn: "https://www.linkedin.com/in/tomas-cardenas-correa/",
        activePeriods: [
            { year: 2025, semester: "summer" },
            { year: 2025, semester: "fall" }
        ],
    },
    {
        name: "Patricio Espinoza",
        username: "patricioespinozaa",
        link: "https://github.com/patricioespinozaa",
        linkedIn: "https://www.linkedin.com/in/patricio-ea/",
        activePeriods: [
            { year: 2025, semester: "summer" },
            { year: 2025, semester: "fall" }
        ],
    },
    {
        name: "Tomás Ubilla",
        username: "TomasAriDev",
        link: "https://github.com/TomasAriDev",
        activePeriods: [
            { year: 2025, semester: "summer" },
            { year: 2025, semester: "fall" }
        ],
    },
    {
        name: "Lukas Vasquez",
        username: "lukasvaz",
        link: "https://github.com/lukasvaz",
        activePeriods: [
            { year: 2025, semester: "summer" },
            { year: 2025, semester: "fall" }
        ],
    },
    {
        name: "Gonzalo Cartes",
        username: "Gon-Code",
        link: "https://github.com/Gon-Code",
        activePeriods: [
            { year: 2025, semester: "summer" },
            { year: 2025, semester: "fall" }
        ],
    },
    {
        name: "Francisco Enriquez",
        username: "franciscoenriq",
        link: "https://github.com/franciscoenriq",
        activePeriods: [
            { year: 2025, semester: "summer" },
            { year: 2025, semester: "fall" }
        ],
    },
    {
        name: "Cristóbal",
        username: "CristobalTortugauwu",
        link: "https://github.com/CristobalTortugauwu",
        activePeriods: [
            { year: 2025, semester: "summer" },
            { year: 2025, semester: "fall" }
        ],
    },
];
