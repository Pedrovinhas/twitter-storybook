import React, { useContext, useState, useEffect, ReactNode } from 'react';
import { auth } from '../services/firebase'

import {
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
} from 'firebase/auth'

import { signInWithEmailAndPassword } from 'firebase/auth'

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = React.createContext({})

export function useAuth(): any {
    return useContext(AuthContext)
  }
  

export function AuthProvider( {children }: AuthProviderProps) {
    const [signedUser, setSignedUser] = useState<any | null>(null)

    useEffect(() => {
        if(signedUser) {
            sessionStorage.setItem("user", JSON.stringify(signedUser));
        }
    })

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((response:any) => {
            console.log(response)
            const user = response.user
            sessionStorage.setItem("user", JSON.stringify(user));
        })
        .then ((err:any) => {
            console.log(err)
    })
    }

    function signInWithGithub() {
        const provider = new GithubAuthProvider()
         signInWithPopup(auth, provider)
            .then((response:any) => {
                console.log(response)
                const user = response.user
                sessionStorage.setItem("user", JSON.stringify(user));
            })
            .then ((err:any) => {
                console.log(err)
        })
    }

    function handleLogin(email: string, password:string) {
       signInWithEmailAndPassword(auth, email, password)
        .then((response:any) => {
            console.log(response)
            const user = response.user
            sessionStorage.setItem("user", JSON.stringify(user));
    })
        .then ((err:any) => {
            console.log(err)
    })
    }

    function signOut(): Promise<any> {
        sessionStorage.clear();
        setSignedUser(null)
        return auth.signOut()
      }

      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setSignedUser(user)
        })
    
        return unsubscribe
      }, [])

    const value = {
        signedUser,
        signInWithGoogle,
        signInWithGithub,
        handleLogin,
        signOut
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}



