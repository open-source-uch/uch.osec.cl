// src/data/membersData.ts
export type Member = {
    name: string;
    username: string | null;
    link: string;
    linkedIn?: string | null;
};

export const members: Member[] = [
    {
        name: "Tomás Villegas",
        username: "tvillega",
        link: "https://github.com/tvillega",
    },
    {
        name: "Cristóbal Stamm",
        username: "cstammp",
        link: "https://github.com/cstammp",
    },
    {
        name: "Tomás Cárdenas",
        username: "tcardenasc",
        link: "https://github.com/tcardenasc",
        linkedIn: "https://www.linkedin.com/in/tomas-cardenas-correa/",
    },
    {
        name: "Patricio Espinoza",
        username: "patricioespinozaa",
        link: "https://github.com/patricioespinozaa",
        linkedIn: "https://www.linkedin.com/in/patricio-ea/",
    },
    {
        name: "Tomás Ubilla",
        username: "TomasAriDev",
        link: "https://github.com/TomasAriDev",
    },
    {
        name: "Lukas Vasquez",
        username: "lukasvaz",
        link: "https://github.com/lukasvaz",
    },
    {
        name: "Gonzalo Cartes",
        username: "Gon-Code",
        link: "https://github.com/Gon-Code",
    },
    {
        name: "Francisco Enriquez",
        username: "franciscoenriq",
        link: "https://github.com/franciscoenriq",
    },
    {
        name: "Cristóbal",
        username: "CristobalTortugauwu",
        link: "https://github.com/CristobalTortugauwu",
    },
];