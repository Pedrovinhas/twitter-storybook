import { Heading } from "./Heading";
import { Icon } from "./Icon";
import {  Sparkle } from 'phosphor-react'

export interface HeaderProps{

}

export function Header(props: HeaderProps) {

    function handleTheme() {
        const root = document.getElementById('root')

        root?.classList.toggle('dark')
    }

    return (
        <div className='w-full h-[53px] flex justify-between items-center border-b-[1px] border-l-[1px] border-r-[1px] border-dark-7  dark:border-b-dark-4 dark:border-l-dark-4 dark:border-r-dark-4'>
            <Heading size="lg" className='dark:text-white ml-4'>
                Home
            </Heading>
            <div className='mr-4'>
                <Icon size='base' >
                    <Sparkle fill='regular' onClick={handleTheme} color='#1DA1F2'/>
                </Icon>
            </div>
        </div>
    )
}