import {House, TwitterLogo} from "phosphor-react";
import {Heading} from "../Heading";
import {Icon} from "../Icon";
import * as Toggle from '@radix-ui/react-toggle';
import clsx from "clsx";
import {ReactNode} from "react";


export interface MenuItemProps {
    active?: boolean 
    children?: ReactNode
}

export function MenuItem(props : MenuItemProps) {

    return (
        <Toggle.Toggle className= {
                        clsx(
                            "   data-[state=off]:text-fullBlack flex items-center justify-start gap-5 w-[255px] h-14 bg-transparent ", 
                            {
                                'data-[state=on]:text-primary-blue' : props.active === true,
                                'data-[state=off]:text-fullBlack': props.active === false
                            }
                        )
                       }>
            {/* <div className="flex items-center justify-start gap-5 w-[255px] h-14 bg-transparent ">
        <Icon size='medium' children={<House />}/>
        <Heading size="lg">
            Home
        </Heading>       
        </div> */}
            {props.children} 
            
        </Toggle.Toggle>
    )
}
