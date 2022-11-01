
import { Avatar } from "./Avatar";
import { Text } from './Text'
import Profile from '../../public/profile.png'
import { Icon } from "./Icon";
import { ArrowsClockwise, ChatCircle, Export, Heart } from "phosphor-react";
import { Link } from 'react-router-dom'
export interface TweetProps {
    src?: string;
    tweet: string;
    time: string;
} 

export function Tweet(props : TweetProps) {
    return (
            <div className="border-[1px] border-dark-7 border-b-dark-7 dark:border-dark-4 ">
                <div className='flex gap-6 ml-4 mr-4 mt-2'>
                    <Avatar size={"md"} src={Profile} alt={'Biscuit'}/>
                    <div>
                        <div>
                            <Text size="md" className='text-black  font-bold mr-1 dark:text-white' >
                               Devon Lane
                            </Text>
                            <Text size='md' className="text-dark-5 mr-1">
                                @marcelosalomao
                            </Text>
                            <Text size='md' className="text-dark-5 mr-1">
                                •
                            </Text>
                            <Text size='md' className="text-dark-5 ">
                                {props.time}
                             </Text>
                    
                        </div>
                        
                        <div>
                            <Text size='md' className="text-black dark:text-white">
                                 {props.tweet}
                            </Text>
                        </div>
                        <div >
                            <img src={props.src} alt="" className='rounded-lg mt-4 dark:border-[1px] dark:border-dark-5' />
                        </div>
                        <div className="flex gap-[86px] mt-4">
                            <span className="flex">
                                <Icon children={<ChatCircle weight="regular" className="text-dark-5 mr-2"/>}/>
                                <Text size='sm'  className="text-dark-5 font-medium">
                                    61
                                </Text>
                            </span>
                            <span className="flex">
                                <Icon children={<ArrowsClockwise weight="regular" className="text-dark-5 mr-2"/>}/>
                                <Text size='sm' className="text-dark-5 font-medium">
                                    12
                                </Text>
                            </span>
                            <span className="flex">
                                <Icon children={<Heart weight="fill" className="text-[#F4245E] mr-2"/>}/>
                                <Text size='sm'  className="text-[#F4245E] font-medium">
                                    6.2K
                                </Text>
                            </span>
                            <span className="flex">
                                <Icon children={<Export weight="regular" className="text-dark-5 mr-2"/>}/>
                                <Text asChild size='sm'  className="text-dark-5 font-medium">
                                    <a href=""> 61 </a>
                                </Text>
                            </span>
                        
                        </div>
                        <div className='mt-4 mb-4'>
                            <Text size='sm' asChild className='  pb-2'>
                              <Link to='*' className='text-primary-blue font-medium'>
                                Show this thread
                             </Link>
                            </Text>
                        </div>
                       
                    </div>
                    
                </div>
            </div>
    )
}