import { IRoute } from "types/navigation"
import NavItem from "./NavItem";

type SubmenuProps = {
    linkDetails: IRoute;
}

export default function Submenu({ linkDetails }: SubmenuProps){
    return(
        <div className="flex w-full">
            <NavItem linkDetails={linkDetails} />
        </div>
    )
}
