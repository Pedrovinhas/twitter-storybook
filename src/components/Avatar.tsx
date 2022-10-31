import clsx from "clsx";

export interface AvatarProps {
    size: 'sm' | 'md';
    src: string;
    alt: string;
}

export function Avatar({size, src, alt}: AvatarProps) {
    return (
        <img src={src} alt={alt} 
        className = {
            clsx(
                'rounded-full',
                {
                    'h-10 w-10' : size === 'sm',
                    'h-12 w-12' : size === 'md'
                }
            )
        } />
    )
}