import { TextareaHTMLAttributes, ReactNode } from "react";
export interface TextAreaRootProps {
  children: ReactNode;
}

export function TextAreaRoot(props: TextAreaRootProps) {
  return (
    <div className='flex items-center gap-3 py-1  mt-1  bg-transparent   ' 
    // focus-within:ring-2 ring-dark-1
    >
    {props.children}
    </div>
    
  )
}

TextAreaRoot.displayName = 'TextArea.Root'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {} // Recieve all input properties

function TextAreaInput(props: TextAreaProps) {
    return (
      <textarea 
      className='bg-transparent h resize-none placeholder:font-medium px-2 flex-1 text-dark-6 text-base  outline-none placeholder:text-dark-5'
      {...props}
    />
       
       
    )
}

TextAreaInput.displayName = 'TextArea.Input'

export const TextArea = {
  Root: TextAreaRoot,
  Input: TextAreaInput,
}