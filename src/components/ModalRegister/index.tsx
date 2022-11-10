import * as Dialog from '@radix-ui/react-dialog'
import { TwitterLogo, X } from 'phosphor-react'
import {Button} from '../Button'
import { Heading } from '../Heading'
import { Icon } from '../Icon'
import { TextInput } from '../Input'
import { Text } from '../Text'
import * as yup from 'yup'
import { phoneNumber } from '../../utils/validation'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InputError } from '../InputError'
import { useState } from 'react'
import React from 'react'

export interface ModalRegisterProps{
   open: boolean;
}

interface FormValues {
name: string;
   email: string;
}

const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(phoneNumber)
})

export function ModalRegister(props: ModalRegisterProps) {
    const [open, setOpen] = React.useState(false);

    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')

    function onError(error: any) {
        console.log(error)
    }

    const { register, handleSubmit, formState: { errors }} = useForm<FormValues>
        ({
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = (data: any)  => {
        console.log(data)
    }

    return (
     
        <Dialog.Root >
    
            <Dialog.Trigger asChild>
                <button className="rounded-full py-5 w-full font-medium border-dark-3 border-opacity-30 border-[1px] ml-0 text-fullBlack flex items-center justify-center gap-2">
                    Sign up with phone or email
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className='fixed bg-opacity-50 bg-fullBlack top-0 w-screen h-screen '/>
            <Dialog.Content className='w-[40vw] h-[70vh]  absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex bg-dark-8 dark:bg-dark-3 rounded-md flex-col gap-9 m-auto'>
                <Dialog.Description>
                    <Icon className='m-auto mt-8'>
                        <TwitterLogo size={48}
                            weight='fill'
                            className='dark:text-white'
                            color="#1DA1F2"/>
                    </Icon>
                    <Heading size="3xl" className='ml-4'>
                        Create an account
                    </Heading>
                </Dialog.Description>
                <form onSubmit={handleSubmit(onSubmit, onError) } className='ml-4 w-[90%]'>
                
                <label htmlFor="name" className='flex flex-col gap-3 mb-4'>
                    <input
                    className='h-[50px] rounded-md px-4 border-[1px] border-opacity-20 border-fullBlack'
                            type='text' 
                            id='name' 
                            placeholder="Name"
                            {...register('name')}
                            // onChange={e => setName(e.target.value)}
                            //  value={name}
                        />
            
                    {errors?.name?.type && <InputError type={errors.name.type} field="name"/> }
                </label>
                
                <label htmlFor="Email" className='flex flex-col gap-3'>
                    <input
                    className='h-[50px] rounded-md px-4 border-[1px] border-opacity-20 border-fullBlack'
                            type='text' 
                            id='email' 
                            placeholder="Email" 
                            {...register('email')}
                            // onChange={e => setEmail(e.target.value)}
                            // value={email}
                            />
                    {errors?.email?.type && <InputError type={errors.email.type} field="email"/>}
                </label>

                <div className="flex flex-col gap-4 w-[80%]">
                    <Text className='font-bold mt-8'>
                        Date of birth
                    </Text>
                    <Text>
                    Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. 
                    Quis bibendum ante phasellus metus, magna lacinia sed augue. 
                    Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit 
                    viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
                    </Text>
                    
                </div>
                <Button size='big' variant='primary' type='submit' className='w-full mt-8' 
                // size="big" variant="primary"
                >
                        Next
                    </Button>
                <Dialog.Close>
                    
                </Dialog.Close>
                </form>
                <Dialog.Close asChild>
                    <Icon size='medium' aria-label='Close'>
                    
                    </Icon>
                </Dialog.Close>
            </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
      
    )
    }