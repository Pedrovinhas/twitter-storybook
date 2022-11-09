import { TwitterLogo } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Icon } from "../components/Icon";
import { TextInput } from "../components/Input";
import { Text } from "../components/Text";
import { useAuth } from '../contexts/AuthContext'
import { useEffect, useState } from "react";


export interface LoginProps {}

export function Login() {
    const { handleLogin, signInWithGoogle, signInWithGithub, signedUser } = useAuth()
    const navigate = useNavigate()

    if(signedUser) {
        navigate('/')
    }
    
    // useEffect(() => {
    //     if (signedUser) navigate('/')

    //   }, [])

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function handleSignIn() {
        await handleLogin(email, password) 
     }

     async function handleGoogleSignIn() {
        await signInWithGoogle()
     }

     function handleGithubSignIn() {
        signInWithGithub()
     }


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-[450px] flex flex-col gap-9'>
                <Icon >
                <TwitterLogo size={48} weight='fill' className='dark:text-white'color="#1DA1F2"/>
                </Icon>
                <Heading size="3xl">
                    Log in to Twitter
                </Heading>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <label htmlFor="email" className='flex flex-col gap-3'>
                        <TextInput.Root>
                            <TextInput.Input onChange={e => setEmail(e.target.value)}  value={email} type='email' id='email' placeholder="Phone number, email address"/>
                        </TextInput.Root>
                    </label>
                    <label htmlFor="password" className='flex flex-col gap-3'>
                        <TextInput.Root>
                            <TextInput.Input onChange={e => setPassword(e.target.value)} value={password} type='password' id='password' placeholder="Password"/>
                        </TextInput.Root>
                    </label>
                    <div className='flex justify-between'>
                     <button onClick={handleGoogleSignIn} className="rounded-full py-1 px-2 border-dark-3 border-opacity-30 border-[1px] ml-0 text-fullBlack flex items-center justify-center gap-2">
                         <Icon size='medium'>
                         <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                         </Icon>
                        <Text> Sign up with Google </Text>
                     </button>
                     <button onClick={handleGithubSignIn} className="rounded-full py-1 px-2 border-dark-3 border-opacity-30 border-[1px] ml-0 text-fullBlack flex items-center justify-center gap-2">
                     <Icon size='medium'>
                           <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Login Authentication" />
                        </Icon>
                    <Text> Sign up with Github </Text>
                    </button>
                    </div>
                    <Button onClick={handleSignIn} className='w-full' size="big" variant="primary">
                        Log In
                    </Button>
                </form>
                <div className="flex mt-4 justify-between text-primary-blue">
                    <Text >
                        <Link to='*'>
                        Forgot password?
                        </Link>
                    </Text>
                    <Text>
                        <Link to=''>
                        Sign up to Twitter
                        </Link>
                    </Text>
                </div>
            </div>
        </div>
    )
}