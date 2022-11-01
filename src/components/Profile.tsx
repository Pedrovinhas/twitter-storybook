import { Avatar } from "./Avatar";
import { Text } from "./Text";
import Profile1 from '../../public/profile.png'
import { Icon } from "./Icon";
import {  DotsThreeOutline } from 'phosphor-react'

export interface ProfileProps {

}

export function Profile(props: ProfileProps) {
    return (
        <a className="flex gap-4 xl:cursor-pointer rounded-full hover:bg-dark-7 xl:dark:hover:bg-dark-4  transition-all duration-150"> 
        <div className="flex items-center justify-end w-full xl:justify-around ">
            <div className='flex gap-2 pt-4 pb-4  '>
                <Avatar className='justify-self-end cursor-pointer' size='md' src={Profile1} alt='Bessie Cooper Profile Picture'/>
                <span>
                    <Text size='base' className='hidden font-bold dark:text-white xl:block' >
                        Jerome Bell
                    </Text>
                    <span className='text-dark-5  text-sm font-medium hidden xl:block'> @afonsoinocente </span>
                </span>
            </div>
            <div className='mr-3 hidden xl:block'>
            <Icon>
                <DotsThreeOutline className='dark:text-white'/>
            </Icon>
            </div>
        </div>
    </a>
    )
}