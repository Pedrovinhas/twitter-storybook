import * as Popover from '@radix-ui/react-popover';
import { Avatar } from "./Avatar";
import { Text } from "./Text";
import DefaultProfile from '../../public/default-profile.png'
import { Icon } from "./Icon";
import {  DotsThreeOutline } from 'phosphor-react'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export interface ProfileProps {

}

export function Profile(props: ProfileProps) {
    const { signOut, signedUser } = useAuth()
    const storageUser = JSON.parse(sessionStorage.getItem('user') || '{}')
    const email = storageUser.email
    const photo = storageUser.photoURL

    function handleLogout() {
        signOut()
    }

    console.log(signedUser)
    return (
        <>
        {signedUser  && 
       
        <Popover.Root>
            <Popover.Trigger>
            <a className="flex gap-4 xl:cursor-pointer rounded-full hover:bg-dark-7 xl:dark:hover:bg-dark-4  transition-all duration-150"> 
                    <div className="flex items-center justify-end w-full xl:justify-around ">
                        <div className='flex gap-2 pt-4 pb-4  '>

                            <Avatar className='justify-self-end cursor-pointer' size='md' src={storageUser.photoURL == null ? DefaultProfile : storageUser.photoURL} alt='Foto de Perfil'/>
                            <span>
                                <Text size='base' className='hidden font-bold dark:text-white xl:block' >
                                    {
                                    storageUser.displayName == null 
                                        ? 
                                        email.slice(0, email.indexOf('@'))
                                        : 
                                        storageUser.displayName
                                    }
                                </Text>
                                <span className='text-dark-5  text-sm font-medium hidden xl:block'> 
                                
                                @{storageUser.displayName == null 
                                        ? 
                                        email.slice(0, email.indexOf('@'))
                                        : 
                                        storageUser.displayName  }
                                </span>
                                 </span>
                        </div>
                        <div className='mr-3 hidden xl:block'>
                        <Icon>
                            <DotsThreeOutline className='dark:text-white'/>
                        </Icon>
                        </div>
                    </div>
                </a>
        </Popover.Trigger>
        <Popover.Content>
            <div className='rounded-md mb-4 mt-4 p-8 w-[250px] bg-dark-2'>
                <button onClick={handleLogout} className='text-white'>
                    Log out {storageUser.displayName == null 
                                        ? 
                                        email.slice(0, email.indexOf('@'))
                                        : 
                                        storageUser.displayName  }
                </button>
            </div>
           
        </Popover.Content>
        </Popover.Root>
        }
        </>
    )
}