import { Heading } from "../Heading";
import { Icon } from "../Icon";
import {  ArrowLeft } from 'phosphor-react'
import { Link } from "react-router-dom";

export interface HeaderProfileProps{

}

export function HeaderProfile(props: HeaderProfileProps) {
    const storageUser = JSON.parse(sessionStorage.getItem('user') || '{}')

    return (
        <div className='w-full h-[53px] sticky top-0  flex items-center gap-8 border-b-[1px] border-l-[1px] border-r-[1px] border-dark-7  dark:border-b-dark-4 dark:border-l-dark-4 dark:border-r-dark-4'>
            
            <Link to='/'>
                <Icon size='medium' className='ml-4 cursor-pointer' >
                        <ArrowLeft fill='regular' color='#1DA1F2'/>
                </Icon>
            </Link>
            <div className='flex flex-col  justify-center mr-4'>
            <Heading size="lg" className='dark:text-white '>
            {   
                                        storageUser.displayName == null 
                                        ? 
                                        'User not found'
                                        : 
                                        storageUser.displayName
                                }
            </Heading>
            <span className="text-xs font-medium text-dark-5"> 9 Tweets</span>
            </div>
        </div>
    )
}