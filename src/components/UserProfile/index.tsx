import { Avatar } from "../Avatar";
import { Text } from '../Text'
import ProfilePic from '../../../public/profile-big.png'
import { Icon } from "../Icon";
import { Button } from "../Button";
import { BackgroundProfileImage } from "./BackgroundProfileImage";
import { Heading } from "../Heading";
import { Calendar, MapPin } from "phosphor-react";

export interface UserProfileProps {}

export function UserProfile() {
    const storageUser = JSON.parse(sessionStorage.getItem('user') || '{}')
    return (
        <div className="w-full h-[430px] flex flex-col">
            <BackgroundProfileImage src={ProfilePic}/>
            <div className='flex flex-col gap-2 z-10 ml-3 mr-3 relative bottom-20 justify-center'>
                <div className='flex justify-between items-end'>
                    <Avatar size="xl" src={ProfilePic} alt="Biscuit Profile Image" className="rounded-full border-4" />
                    <Button size="tiny" variant="secondary">
                        Edit Profile
                    </Button>
                </div>
                <div>
                    <Heading size='2xl' className="mb-[-4px] dark:text-white ">
                    {   
                                        storageUser.displayName == null 
                                        ? 
                                        'User not found'
                                        : 
                                        storageUser.displayName
                                }
                    </Heading>
                    <span className='text-dark-5 text-base font-medium'> @  {   
                                        storageUser.displayName == null 
                                        ? 
                                        'User not found'
                                        : 
                                        storageUser.displayName
                                } </span>
                </div>

                  <Text size="base" className="dark:text-white">
                  Product Designer
                  </Text>
               <div className='flex gap-2'>
                <span className='flex gap-2 justify-center dark:text-white'>
                    <Icon size="base">
                    <MapPin />
                    </Icon>
                    <Text size="base">
                        {/* Passar como props no cadastro do usuário consumo de API */}
                        London
                    </Text>
                </span>
                <span className='flex gap-2 items-center justify-center dark:text-white'>
                <Icon size="base" >
                <Calendar />


                        </Icon>
                        <Text size="base"> 
                            {/* Passar como props no cadastro do usuário consumo de API */}
                            Joined September 2011
                        </Text>
                </span>
               </div>
               <div className='flex gap-4 dark:text-white'>
                <span>
                    <Text size="base" className="font-bold">
                        569
                        
                    </Text>
                    <span className='text-dark-5  text-sm font-medium'> Following </span>
                </span>
                <span>
                        <Text size="base" className="font-bold"> 
                            72
                        </Text>
                        <span className='text-dark-5  text-sm font-medium'> Followers </span>
                </span>
               </div>
            </div>
        </div>
    )
}