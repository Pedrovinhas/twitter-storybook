import PlaceholderImage from '../../../public/placeholder-img.png'
import Profile from '../../../public/profile.png'


interface BackgroundProfileImageProps {
    src: string;
}


export function BackgroundProfileImage({ src }: BackgroundProfileImageProps) {
    return (
        <div className='relative w-full h-[200px] '>
        <img className='  bg-center items-start' src={''} onError={e => {
            e.currentTarget.src = PlaceholderImage
        }}/>
        </div>
    )
}