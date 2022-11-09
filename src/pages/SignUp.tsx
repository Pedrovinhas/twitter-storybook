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
        <div>
        <div>
            <div>

            </div>
            <div>
            <Icon >
            <TwitterLogo size={48} weight='fill' className='dark:text-white'color="#1DA1F2"/>
            </Icon>
            <Heading className="text-4xl" >
               <h1>
                   Happening now
               </h1>
            </Heading>
            <Heading size='3xl'>
                Join Twitter Today
            </Heading>
            <div>
                <span>
                    <Text> Sign up with Google </Text>
                    <Icon size='medium'>
                        <GoogleLogo />
                    </Icon>
                </span>
                <span>
                    <Text> Sign up with Github </Text>
                    <Icon size='medium'>
                        <GithubLogo />
                    </Icon>
                </span>
                <ModalRegister />
            </div>
            <Text>
            By singing up you agree to the Terms of Service and Privacy Policy, including Cookie Use.  
            </Text>
            <Text>
                <Link to=''>
                Already have an account? Log in
                </Link>
              
            </Text>
            </div>
        </div>
        <footer>
            <ul>
                
            </ul>
        </footer>
        </div>
    )
}