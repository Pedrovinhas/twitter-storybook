import { TwitterLogo, Article, Bell, Bookmark, DotsThreeCircle, Envelope, Hash, House, User, PaperPlaneTilt } from "phosphor-react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Icon } from "../Icon";
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Profile } from "../Profile";
import { MenuItem } from "../MenuItem";
import { Link } from 'react-router-dom';

export interface SideMenuProps {
}

export function SideMenu(props: SideMenuProps) {
   return (
    <div className=" w-[150px] max-w-[275px] xl:w-[275px]">
        <div className='flex flex-col h-[900px] justify-between sticky top-0 left-0 mr-4 max-h-screen'>
            <div className='mt-2 '>
                <div className='mb-4 flex flex-col items-end  xl:items-start'>
                <Icon children={<TwitterLogo weight='fill' className='dark:text-white'color="#1DA1F2"/>} size='medium'/>
                </div>
                <ToggleGroup.Root defaultValue='1' className="flex flex-col items-end   xl:items-start" type="single">
        
                <Link to='/'>
                    <ToggleGroup.Item className='dark:text-white data-[state=on]:text-primary-blue data-[state=on]:dark:text-primary-blue flex items-center justify-start gap-5 h-14 hover:bg-dark-7 hover:rounded-full dark:hover:bg-dark-4 xl:w-32' value="1" >
                        <Icon size='medium' children={<House className='' />}/>
                        <Heading size="lg" className=' hidden xl:block'>
                            Home
                        </Heading>
                        </ToggleGroup.Item>
                </Link>
                <Link to='*'>
                    <ToggleGroup.Item className='dark:text-white  data-[state=on]:text-primary-blue data-[state=on]:dark:text-primary-blue flex items-center justify-start gap-5 h-14  hover:bg-dark-7 dark:hover:bg-dark-4 hover:rounded-full xl:w-32' value="2" >
                    <Icon size='medium' children={<Hash className='' />}/>
                    <Heading size="lg" className=' hidden xl:block'>
                        Explore
                    </Heading>
                </ToggleGroup.Item>
                </Link>
                <Link to='*'>
                <ToggleGroup.Item className='dark:text-white data-[state=on]:text-primary-blue data-[state=on]:dark:text-primary-blue flex items-center justify-start gap-5 h-14  hover:bg-dark-7 dark:hover:bg-dark-4 hover:rounded-full xl:w-48' value="3" >
                    <Icon size='medium' children={<Bell className='' />}/>
                    <Heading size="lg" className=' hidden xl:block'>
                        Notifications
                    </Heading>
            
                </ToggleGroup.Item>
                </Link>

                <Link to='*'>
                <ToggleGroup.Item className='dark:text-white data-[state=on]:text-primary-blue data-[state=on]:dark:text-primary-blue flex items-center justify-start gap-5 h-14  hover:bg-dark-7 dark:hover:bg-dark-4 hover:rounded-full xl:w-44' value="4" >
                    <Icon size='medium' children={<Envelope className='' />}/>
                    <Heading size="lg" className=' hidden xl:block'>
                        Messages
                    </Heading>
            
                </ToggleGroup.Item>
                </Link>

                <Link to='*'>
                <ToggleGroup.Item className='dark:text-white data-[state=on]:text-primary-blue data-[state=on]:dark:text-primary-blue flex items-center justify-start gap-5 h-14  hover:bg-dark-7 dark:hover:bg-dark-4 hover:rounded-full xl:w-44' value="5" >
                    <Icon size='medium' children={<Bookmark className='' />}/>
                    <Heading size="lg" className=' hidden xl:block'>
                        Bookmarks
                    </Heading>
            
                </ToggleGroup.Item>
                </Link>

                <Link to='*'>
                <ToggleGroup.Item className='dark:text-white data-[state=on]:text-primary-blue data-[state=on]:dark:text-primary-blue flex items-center justify-start gap-5 h-14  hover:bg-dark-7 dark:hover:bg-dark-4 hover:rounded-full xl:w-44' value="6" >
                    <Icon size='medium' children={<Article className='' />}/>
                    <Heading size="lg" className=' hidden xl:block'>
                        Lists
                    </Heading>
            
                </ToggleGroup.Item>
                </Link>

                <Link to='*'>
                <ToggleGroup.Item className='dark:text-white data-[state=on]:text-primary-blue data-[state=on]:dark:text-primary-blue flex items-center justify-start gap-5 h-14  hover:bg-dark-7 dark:hover:bg-dark-4 hover:rounded-full xl:w-44' value="7" >
                    <Icon size='medium' children={<User className='' />}/>
                    <Heading size="lg" className=' hidden xl:block'>
                        Profile
                    </Heading>
            
                </ToggleGroup.Item>
                </Link>

                <Link to='*'>
                <ToggleGroup.Item className='dark:text-white data-[state=on]:text-primary-blue data-[state=on]:dark:text-primary-blue flex items-center justify-start gap-5 h-14  hover:bg-dark-7 dark:hover:bg-dark-4 hover:rounded-full xl:w-44' value="8" >
                    <Icon size='medium' children={<DotsThreeCircle className='' />}/>
                    <Heading size="lg" className=' hidden xl:block'>
                        More
                    </Heading>
            
                </ToggleGroup.Item>
                </Link>
            
                <div className='mt-4 flex-col flex items-end'>
                <Link to='*'><Button className='hidden xl:block' children={'Tweet'} size='big'/></Link>
                <span className='rounded-full flex justify-center items-center text-white h-12 w-12 cursor-pointer  bg-primary-blue xl:hidden'>
                    <PaperPlaneTilt size={24} />
                </span>
                </div>
                </ToggleGroup.Root>
            </div>
            <Profile/>
        </div>
    </div>
   )
}   