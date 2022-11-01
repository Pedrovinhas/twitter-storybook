import { Aside } from './components/Aside'
import { Footer } from './components/Footer'
import { Main } from './components/Main'
import { SideMenu } from './components/SideMenu'
import PathRoutes from './routes'
import './styles/global.css'

export function App() {
  return (
    <PathRoutes></PathRoutes>
  //   <div className='flex items-center flex-col dark:bg-dark-1 '>
  //   <div className='flex '>
  //     <SideMenu/>
  //     <Main />
  //     <Aside/>
  //  </div>
  //    <Footer/>
  //  </div>
  )
}