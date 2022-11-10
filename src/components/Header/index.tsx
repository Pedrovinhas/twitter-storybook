import { Heading } from "../Heading";
import { Icon } from "../Icon";
import {  Sparkle } from 'phosphor-react'
import { useTheme } from '../../hooks/useTheme'
export interface HeaderProps{

}

export function Header(props: HeaderProps) {
    const { theme, setTheme } = useTheme()

    return (
        <div className='w-full h-[53px] sticky top-0 flex justify-between items-center border-b-[1px] border-l-[1px] border-r-[1px] border-dark-7  dark:border-b-dark-4 dark:border-l-dark-4 dark:border-r-dark-4'>
            <Heading size="lg" className='dark:text-white ml-4'>
                Home
            </Heading>
            <div className='mr-4'>
                <Icon size='base' >
                    <Sparkle fill='regular' onClick={() => setTheme(!theme)} color='#1DA1F2'/>
                </Icon>
            </div>
        </div>
    )
}