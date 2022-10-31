import { Avatar } from "./Avatar";
import { Text } from './Text'
import Profile from '../../public/profile.png'
import { Icon } from "./Icon";
import { ArrowsClockwise, ChatCircle, Export, Heart } from "phosphor-react";

export interface TweetProps {
    src: string;
}

export function Tweet(props : TweetProps) {
    return (
            <div className="flex gap-6">
                <Avatar size={"md"} src={Profile} alt={'Biscuit'}/>
                <div>
                    <div>
                        <Text size="md" className='text-black mr-1 font-bold mr-1' >
                           Devon Lane
                        </Text>
                        <Text size='md' className="text-dark-5 mr-1">
                            @marcelosalomao
                        </Text>
                        <Text size='md' className="text-dark-5 mr-1">
                            •
                        </Text>
                        <Text size='md' className="text-dark-5 ">
                            23s
                         </Text>
                    
                    </div>
                    <div>
                        <Text size='md' className="text-black">
                             Hold on I need at least a few minutes!
                        </Text>
                    </div>
                    <div >
                        <img src={props.src} alt="" className='rounded-lg mt-4' />
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
                </div>
            </div>
    )
}