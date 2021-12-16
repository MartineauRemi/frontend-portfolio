import { Dispatch, SetStateAction } from "react"

export interface INavMenuProps{
    navMenuActive: boolean;
    setNavMenuActive: Dispatch<SetStateAction<boolean>>;
    scrolled: boolean;
}

export interface IProject{
    id: number;
    title: string;
    subtitle?: string;
    overview?: string;
    stack: string[];
    github: string;
    url: string;
    thumbnail: string;
}