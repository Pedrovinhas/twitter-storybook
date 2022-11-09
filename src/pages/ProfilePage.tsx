import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import { PerfilSection } from "../components/PerfilSection";
import { SideMenu } from "../components/SideMenu";
import { useAuth } from "../contexts/AuthContext";

export function ProfilePage() {
  const { signedUser } = useAuth()

  
    return (
        <div className='flex items-center flex-col dark:bg-dark-1 '>
        <div className='flex '>
          <SideMenu defaultValue="7"/>
          <PerfilSection/>
          <Aside/>
       </div>
       { signedUser ? ''  :  <Footer/>}
      
       </div>
      )
}