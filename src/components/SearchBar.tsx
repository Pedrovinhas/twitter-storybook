import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";



export interface SearchBarRootProps {
  children: ReactNode;
}

export function SearchBarRoot(props: SearchBarRootProps) {
  return (
    <div className='flex items-center gap-3 py-2 w-full mt-1 rounded-full bg-dark-7   focus-within:ring-2 ring-dark-8 dark:bg-dark-2'
    >
    {props.children}
    </div>
    
  )
}

SearchBarRoot.displayName = 'SearchBar.Root'


export interface SearchBarIconProps {
  children: ReactNode;
}

function SearchBarIcon(props: SearchBarIconProps) {
  return (
    <Slot className='mr-2 ml-4 w-6 h-6 text-dark-5'>
      {props.children}
    </Slot>
  )
}

SearchBarIcon.displayName = 'SearchBar.Icon'

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {} // Recieve all input properties

function SearchBarInput(props: SearchBarProps) {
    return (
      <input 
      className='bg-transparent flex-1 text-dark-6 text-sm  outline-none placeholder:text-dark-5'
      {...props}
    />
       
       
    )
}

SearchBarInput.displayName = 'SearchBar.Input'

export const SearchBar = {
  Root: SearchBarRoot,
  Input: SearchBarInput,
  Icon: SearchBarIcon
}