import { clsx } from 'clsx'

export interface TextProps {
    size?: 'sm' | 'md' | 'base' | 'lg' 
    children: string
}

export function Text({
    size = 'md',
    children
} : TextProps) {
    return (
        <span className={
            clsx('black font-sans', {
                'text-xs': size === 'sm',
                'text-md': size === 'md',
                'text-base': size === 'base',
                'text-lg' : size === 'lg'
            })
        }>

            {children} </span>
    )
}
