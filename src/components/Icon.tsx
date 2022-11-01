import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "react"
import clsx from "clsx";
import { Primary } from "./Button.stories";

export interface IconProps  {
    children: ReactNode;
    isDark?: boolean;
    selected?: boolean;
    size?: 'base' | 'medium';
    className?: string;
}  

export function Icon(props: IconProps) {
    return (
        <Slot className = {
        clsx(
            {
                'h-6 w-6': props.size === 'base',
                'h-[30px] w-[30px]': props.size === 'medium',

                'fill-black' : props.isDark === true,
                'fill-white' : props.isDark === false,

                'fill' : props.selected ===true


            },
            props.className
        )} 
        >
            {props.children}
        </Slot>
        
    )
}