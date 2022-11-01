import { Link } from "react-router-dom";
import { Heading } from "./Heading";
import { Text } from './Text'

export interface NewsProps {

}

export function News(props: NewsProps) {
    return (
        <div className='bg-dark-8 flex flex-col w-[350px] rounded-2xl dark:bg-dark-2 '>
            <div className='pt-[11px] pb-[11px] border-b-dark-7 border-[1px] border-t-0 border-l-0 border-r-0 border-opacity-5'>
                <Heading size="xl" className='ml-4 dark:text-white' >
                    What's Happening
                </Heading>
            </div>
            <a className="flex justify-center gap-4 pt-2 pb-2 cursor-pointer border-b-dark-7 border-[1px] border-t-0 border-l-0 border-r-0 border-opacity-5 hover:bg-dark-7 dark:hover:bg-dark-4  transition-all duration-150"> 
                <div className="ml-4 w-[235px]">
                    <div className="flex gap-1">
                        <span className="text-sm font-medium text-dark-5"  >
                            COVID19
                        </span>
                        <span className=" text-sm font-medium text-dark-5"  >
                          ·
                        </span>
                        <span className=" text-sm font-medium text-dark-5"  >
                          Last Night
                        </span>
                    </div>
                    <div>
                        <Text size='md' className="text-black font-bold dark:text-white">
                        England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic
                        </Text>
                    </div>
                    <div>
                        <span className="text-sm text-dark-5 font-medium">
                            Trending with <span className="text-primary-blue"> #covid19 </span>
                        </span>
                    </div>
                </div>
                <div className="w-16 h-16">
                    <img src="../../public/thumbnail-1.png" alt="" className="w-16 h-16 rounded-xl" /> 
                    {/* Thumbnail Component? */}
                </div>
            </a>
            <a className="flex justify-center gap-4 pt-2 pb-2 cursor-pointer border-b-dark-7 border-[1px] border-t-0 border-l-0 border-r-0 border-opacity-5 hover:bg-dark-7 dark:hover:bg-dark-4  transition-all duration-150"> 
                <div className="ml-4 w-[235px]">
                    <div className="flex gap-1">
                        <span className="text-sm font-medium text-dark-5"  >
                            US news
                        </span>
                        <span className=" text-sm font-medium text-dark-5"  >
                          ·
                        </span>
                        <span className=" text-sm font-medium text-dark-5"  >
                          4h ago
                        </span>
                    </div>
                    <div>
                        <Text size='md' className="text-black font-bold dark:text-white">
                        Parler may go offline following suspensions by Amazon, Apple and Google
                        </Text>
                    </div>
                    <div>
                        <span className="text-sm text-dark-5 font-medium">
                            Trending with <span className="text-primary-blue"> #trump </span>
                        </span>
                    </div>
                </div>
                <div className="w-16 h-16">
                    <img src="../../public/thumbnail-2.png" alt="" className="w-16 h-16 rounded-xl" /> 
                    {/* Thumbnail Component? */}
                </div>
            </a>
            <a className="flex justify-center gap-4 pt-2 pb-2 cursor-pointer border-b-dark-7 border-[1px] border-t-0 border-l-0 border-r-0 border-opacity-5 hover:bg-dark-7 dark:hover:bg-dark-4  transition-all duration-150">
                <div className="ml-4 w-[235px]">
                    <div className="flex gap-1">
                        <span className="text-sm font-medium text-dark-5"  >
                            Indian
                        </span>
                        <span className=" text-sm font-medium text-dark-5"  >
                          ·
                        </span>
                        <span className=" text-sm font-medium text-dark-5"  >
                          1h ago
                        </span>
                    </div>
                    <div>
                        <Text size='md' className="text-black font-bold dark:text-white">
                        India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test
                        </Text>
                    </div>
                    <div>
                        <span className="text-sm text-dark-5 font-medium">
                            Trending with <span className="text-primary-blue"> #sport </span>
                        </span>
                    </div>
                </div>
                <div className="w-16 h-16">
                    <img src="../../public/thumbnail-3.png" alt="" className="w-16 h-16 rounded-xl" /> 
                    {/* Thumbnail Component? */}
                </div>
            </a>
            <Link to='*' className='pt-3 pb-3 rounded-b-2xl hover:bg-dark-7 dark:hover:bg-dark-4  duration-300'>
                <span className='text-primary-blue ml-6 font-medium text-md'> Show more </span>
                {/* Link Component? */}
            </Link>
        </div>
    )
}