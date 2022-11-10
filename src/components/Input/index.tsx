import { ReactNode, InputHTMLAttributes } from "react";


export interface TextInputRootProps {
  children: ReactNode;
}

export function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 py-1 w-full h-[70px] rounded-md border-[1px] border-dark-7 border-opacity-30 mt-1  bg-transparent   ' 
    // focus-within:ring-2 ring-dark-1
    >
    {props.children}
    </div>
    
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {} // Recieve all input properties

function TextInputInput(props: TextInputProps) {
    return (
      <input 
      className='w-full bg-transparent h-full resize-none placeholder:font-medium px-2 flex-1 text-fullBlack placeholder:text-opacity-60 text-base  outline-none placeholder:text-fullBlack'
      {...props}
    />
       
       
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
}