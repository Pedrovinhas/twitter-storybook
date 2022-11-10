import clsx from "clsx";
import DefaultProfile from '../../../public/default-profile.png'
export interface AvatarProps {
    size: 'sm' | 'md' | 'xl';
    src: string;
    alt: string;
    className?: string;
}

export function Avatar({size, src, alt, className}: AvatarProps) {
    const storageUser = JSON.parse(sessionStorage.getItem('user') || '{}')
    return (
        <img src={storageUser.photoURL === null ? DefaultProfile : storageUser.photoURL} referrerPolicy="no-referrer" alt={alt} 
        className = {
            clsx(
                'rounded-full',
                {
                    'h-10 w-10' : size === 'sm',
                    'h-12 w-12' : size === 'md',
                    'h-36 w-36' : size === 'xl'
                },
                className
            )
        } />
    )
}