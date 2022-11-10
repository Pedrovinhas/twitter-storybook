import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Icon } from "../components/Icon";
import { ModalRegister } from "../components/ModalRegister";
import { Text } from "../components/Text";

export interface SignUpProps{}

export function SignUp() {
    return (
        <div className='flex flex-col'>
        <section className='flex items-center gap-32 justify-center'>
            <div className=''>
                <img className='h-[95vh]'src="../../../public/bg-twitter.png" alt="" />
            </div>
            <div>
            <Icon >
            <TwitterLogo size={48} weight='fill' className='dark:text-white'color="#1DA1F2"/>
            </Icon>
            <Heading  >
               <h1 className="text-4xl">
                   Happening now
               </h1>
            </Heading>
            <Heading size='3xl'>
                Join Twitter Today
            </Heading>
            <div className='mt-8 w-[400px]'>
                <div className='flex flex-col gap-4 items-start justify-between'>
                     <button className="rounded-full py-4 w-full font-medium border-dark-3 border-opacity-30 border-[1px] ml-0 text-fullBlack flex items-center justify-center gap-2">
                         <Icon size='medium'>
                         <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                         </Icon>
                        <Text> Sign up with Google </Text>
                     </button>
                     <button className="rounded-full  py-4 w-full font-medium border-dark-3 border-opacity-30 border-[1px] ml-0 text-fullBlack flex items-center justify-center gap-2">
                     <Icon size='medium'>
                           <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Login Authentication" />
                        </Icon>
                    <Text> Sign up with Github </Text>
                    </button>
                    <ModalRegister open={false} />
                    </div>
                
            
              
            </div>
            <div className='w-[373px] flex flex-col gap-4 mt-4'>
                <Text size='sm'>
                By singing up you agree to the <Link to='*' className='text-primary-blue'>Terms of Service </Link> and <Link to='*' className='text-primary-blue'>Privacy Policy </Link>, including <Link to='*' className='text-primary-blue'>Cookie Use </Link>.
                </Text>
                <Text size='sm'>
                    <Link to=''>
                    Already have an account?  <Link to='/login' className='text-primary-blue'>Log in </Link>
                    </Link>
                
                </Text>
            </div>
            </div>
        </section>
        <footer>
            <ul>
                <li> oi</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </footer>
        </div>
    )
}