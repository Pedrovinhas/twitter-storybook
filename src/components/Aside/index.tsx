import { MagnifyingGlass } from "phosphor-react";
import { Follow } from "../Follow";
import { News } from "../News";
import { SearchBar } from "../SearchBar";

export interface AsideProps {

}

export function Aside() {
    return (
        <div className=' flex-col gap-4  top-0 left-0 sticky max-h-full hidden lg:flex'>
            <SearchBar.Root>
                <SearchBar.Icon>
                    <MagnifyingGlass/>
                </SearchBar.Icon>
                <SearchBar.Input placeholder="Search Tweet"/>
            </SearchBar.Root>
            <News/>
            <Follow/>
        </div>
    )
}