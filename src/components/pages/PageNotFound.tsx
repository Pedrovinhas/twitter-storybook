import { Footer } from "../Footer";
import { Button } from "../Button";
import { SideMenu } from "../SideMenu";
import { Text } from '../Text'
import { Link } from 'react-router-dom'
import { Home } from "./Home";

export interface PageNotFoundProps{}

export function PageNotFound() {
    return(
  
              <div className='flex items-center flex-col dark:bg-dark-1 '>
              <div className='flex '>
                <SideMenu/>
                <div className="flex flex-col ml-4 items-center justify-center h-[300px] gap-4">
                    <Text size='sm' className="text-dark-6">
                      Hmm...this page doesn’t exist. Try searching for something else.
                    </Text>
                    <Link to='/'>
                    <Button disabled={false} size="tiny">
                        Search
                    </Button>
                    </Link>
                </div>
             </div>
               <Footer/>
             </div>
            
        
    )
}