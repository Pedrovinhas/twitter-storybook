import * as Tabs from '@radix-ui/react-tabs';
import { Tweet } from '../Tweet';

export interface TabbarProps{}

export function Tabbar() {
    return(
        <Tabs.Root  className='' defaultValue='tab1'>
            <Tabs.TabsList className='flex h-[52px] justify-evenly font-bold'>
                <Tabs.TabsTrigger className='text-dark-4 w-full flex items-center justify-center border-b-[1px] border-b-dark-8 dark:text-dark-6 dark:border-b-dark-6 dark:data-[state=active]:border-b-primary-blue dark:data-[state=active]:text-primary-blue data-[state=active]:border-b-primary-blue data-[state=active]:text-primary-blue 'value='tab1'> Tweets </Tabs.TabsTrigger>
                <Tabs.TabsTrigger className='text-dark-4 w-full flex items-center justify-center border-b-[1px] border-b-dark-8 dark:text-dark-6 dark:border-b-dark-6 dark:data-[state=active]:border-b-primary-blue dark:data-[state=active]:text-primary-blue data-[state=active]:border-b-primary-blue data-[state=active]:text-primary-blue  ' value='tab2'> Tweets & replies </Tabs.TabsTrigger>
                <Tabs.TabsTrigger className='text-dark-4 w-full flex items-center justify-center border-b-[1px] border-b-dark-8 dark:text-dark-6 dark:border-b-dark-6 dark:data-[state=active]:border-b-primary-blue dark:data-[state=active]:text-primary-blue data-[state=active]:border-b-primary-blue data-[state=active]:text-primary-blue ' value='tab3'> Media </Tabs.TabsTrigger>
                <Tabs.TabsTrigger className='text-dark-4 w-full flex items-center justify-center border-b-[1px] border-b-dark-8 dark:text-dark-6 dark:border-b-dark-6 dark:data-[state=active]:border-b-primary-blue dark:data-[state=active]:text-primary-blue data-[state=active]:border-b-primary-blue data-[state=active]:text-primary-blue' value='tab4'> Likes </Tabs.TabsTrigger>
            </Tabs.TabsList>
            <Tabs.Content value='tab1'>
                    <Tweet time='' tweet=''/>
            </Tabs.Content>
            <Tabs.Content value='tab2'>
              
            </Tabs.Content>
            <Tabs.Content value='tab3'>
                  
            </Tabs.Content>
            <Tabs.Content value='tab4'>
                   
            </Tabs.Content>
        </Tabs.Root>
    )
}