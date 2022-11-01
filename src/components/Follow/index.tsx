import { Avatar } from "../Avatar";
import { Heading } from "../Heading";
import { Text } from '../Text' 
import Profile1 from '../../../public/profile-1.png'
import Profile2 from '../../../public/profile-2.png'
import { Button } from "../Button";
import { Link } from "react-router-dom";

export interface FollowProps {

}

export function Follow(props: FollowProps) {
    return (
        <div className='bg-dark-8 flex flex-col w-[350px] rounded-2xl dark:bg-dark-2'>
        <div className='pt-[11px] pb-[11px] border-b-dark-7 border-[1px] border-t-0 border-l-0 border-r-0 border-opacity-5'>
            <Heading size="xl" className='ml-4 dark:text-white' >
                Who to follow
            </Heading>
        </div>
        <a className="flex  gap-4 pt-2 pb-2 cursor-pointer border-b-dark-7 border-[1px] border-t-0 border-l-0 border-r-0 border-opacity-5 hover:bg-dark-7 dark:hover:bg-dark-4  transition-all duration-150"> 
            <div className="flex  items-center ml-4">
                <div className='flex gap-2 pt-4 pb-4'>
                    <Avatar size='md' src={Profile1} alt='Bessie Cooper Profile Picture'/>
                    <span>
                        <Text size='base' className='font-bold dark:text-white' >
                            Bessie Cooper
                        </Text>
                        <span className='text-dark-5  text-sm font-medium'> @alessandroveronezi </span>
                    </span>
                </div>
                <div className='mr-3'>
                <Button variant="secondary" size="tiny"> Follow  </Button>
                </div>
            </div>
        </a>
        <a className="flex  gap-4 pt-2 pb-2 cursor-pointer border-b-dark-7 border-[1px] border-t-0 border-l-0 border-r-0 border-opacity-5 hover:bg-dark-7 dark:hover:bg-dark-4 transition-all duration-150"> 
            <div className="flex  items-center ml-4">
                <div className='flex gap-2 pt-4 pb-4'>
                    <Avatar size='md' src={Profile2} alt='Jenny Wilson Profile Picture'/>
                    <span>
                        <Text size='base' className='font-bold dark:text-white' >
                        Jenny Wilson
                        </Text>
                        <span className='text-dark-5  text-sm font-medium'> @gabrielcantarin </span>
                    </span>
                </div>
                <div className='mr-3'>
                <Button variant="secondary" size="tiny" > Follow  </Button>
                </div>
            </div>
        </a>
       
        <Link to="*" className='pt-3 pb-3 rounded-b-2xl hover:bg-dark-7 dark:hover:bg-dark-4  duration-300'>
                <span className='text-primary-blue ml-6 font-medium text-md'> Show more </span>
                {/* Link Component? */}
            </Link>
    </div>
    )
}