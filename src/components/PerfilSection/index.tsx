import { HeaderProfile } from "../HeaderProfile";
import { Tabbar } from "../Tabbar";
import { Tweet } from "../Tweet";
import { UserProfile } from "../UserProfile";

export interface PerfilSectionProps {}

export function PerfilSection() {
    return (
        <div className="flex-col flex">
            <HeaderProfile/>
            <UserProfile/>
            <Tabbar/>
            <Tweet tweet={""} time={""}/>
        
        </div>
    )
}