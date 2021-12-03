import { Dispatch, SetStateAction } from "react"

export interface INavMenuProps{
    navMenuActive: boolean;
    setNavMenuActive: Dispatch<SetStateAction<boolean>>;
}