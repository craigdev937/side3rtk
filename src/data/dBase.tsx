import type { IconType } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { MdContacts } from "react-icons/md";
import { CgInfo } from "react-icons/cg";

type DATA = {
    id: number, 
    to: string,
    toolTip: string,
    Icon: IconType
}

export const NAV: DATA[] = [
    { id: 1, to: "/", toolTip: "Home", Icon: AiFillHome },
    { id: 2, to: "/about", toolTip: "About", Icon: FcAbout },
    { id: 3, to: "/contact", toolTip: "Contact", Icon: MdContacts },
    { id: 4, to: "/info", toolTip: "Info", Icon: CgInfo },
];



