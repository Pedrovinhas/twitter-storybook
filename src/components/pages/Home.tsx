import { Aside } from "../Aside";
import { Footer } from "../Footer";
import { Main } from "../Main";
import { SideMenu } from "../SideMenu";

export interface HomeProps {

}

export function Home() {
    return (
        <div className='flex items-center flex-col dark:bg-dark-1 '>
        <div className='flex '>
          <SideMenu/>
          <Main />
          <Aside/>
       </div>
         <Footer/>
       </div>
      )
}