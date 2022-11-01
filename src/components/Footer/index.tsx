import { Button } from "../Button";
import { Heading } from "../Heading";
import { Text } from '../Text'

export interface FooterProps {}

export function Footer(){
    return (
        <div className='bg-primary-blue flex w-full h-[77px] items-center justify-around mt-4 sticky bottom-0'>
            <div>
                <Heading size='xl' className='dark:text-white'>
                    Don't miss what's happening
                </Heading>
                <Text size='lg' className='dark:text-white'>
                    People on Twitter are the first to know
                </Text>
            </div>
            <div className="flex gap-2 justify-self-end mr-4"  >
                <Button variant='terciary'  size="tiny">
                    Log in
                </Button>
                <Button variant='quaternary' className='bg-white 'size="tiny">
                    Sign up
                </Button>
            </div>
        </div>
    )
}