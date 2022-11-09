import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { SideMenu } from "../components/SideMenu";

export interface HomeProps {

}

export function Home() {
    return (
        <div className='flex items-center flex-col dark:bg-dark-1 '>
        <div className='flex '>
          <SideMenu defaultValue="1"/>
          <Main />
          <Aside/>
       </div>
         {/* <Footer/> */}
       </div>
      )
}