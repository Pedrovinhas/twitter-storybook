import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchBar(props: SearchBarProps) {
    return (
      <div className='py-5 w-full rounded-full outline-none bg-dark-7 text-dark-5 text-sm placeholder:text-dark-5 focus:ring-2 ring-dark-8'
      >
      
      <input 
      className={clsx(
        ''
      )}
      {...props}
    />
      
    </div>
       
    )
}