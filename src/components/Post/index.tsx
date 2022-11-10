
import { Avatar } from "../Avatar";
import { TextArea } from "../TextArea";
import Profile from '../../../public/profile.png'
import {
    Calendar,
    ChartBarHorizontal,
    Gif,
    ImageSquare,
    Smiley,
    Trash,
    X
} from "phosphor-react";
import { Icon } from "../Icon";
import { Button } from "../Button";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Tweet } from "../Tweet";
import { useTweets } from '../../contexts/TweetContext';
import moment from "moment";

export interface TweetPostProps {
    tweetContent: string;
    time: number;
    thumbnail?: string;
    picture: any;
   
}

export function Post({ tweetContent, time, thumbnail, picture }: TweetPostProps) {
    const storageUser = JSON.parse(sessionStorage.getItem('user') || '{}')
    const [tweets, setTweets] = useState<TweetPostProps[]>([])
    const [tweet, setTweet] = useState('')
    const [image, setImage] = useState<null | Blob | any>()

    const imageToBase64 = (file: Blob) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => resolve(fileReader.result)
            fileReader.onerror = error => reject(error)
            fileReader.readAsDataURL(file)
        })
    }

    const createdAt = new Date()

    const timeago = moment(createdAt).fromNow();

    function handleAddTweet() {
      

        const newTweet = {
            user: storageUser.email,
            tweetContent: tweet,
            time: time,
            picture: image,
          
        }

        
        image ? imageToBase64(image).then(base64 => {
            newTweet.picture = base64 as string;
            console.log(newTweet.picture)
            setTweets(prevState => [ newTweet, ...prevState])
        }) : setTweets(prevState => [ newTweet, ...prevState])

        console.log(newTweet)
    
        setTweet('')
        setImage(null)
        
    }
    
     const items = JSON.parse(localStorage.getItem('tweets') as string)
     console.log(items)

    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    function handleTextAreaValue(e: ChangeEvent<HTMLTextAreaElement>) {
                setTweet(e.target.value)
               
    }

    const isNewTweetEmpty = tweet.length === 0

    localStorage.setItem('tweets', JSON.stringify(tweets))

    return (
        <>
        <div className='flex  gap-3 border-b-[1px] border-l-[1px] border-r-[1px] border-dark-7 dark:border-b-dark-4 dark:border-l-dark-4 dark:border-r-dark-4'>
            <div className='ml-4 mt-2  flex justify-center '>
                <Avatar src={Profile}
                    alt='Profile Biscuit Image'
                    size="md"
                    />
            </div>
            <form className='flex w-[500px] flex-col justify-between  h-[118px] mt-2'
                  onSubmit={handleSubmit}
                >
                <div>
                    <TextArea.Root>
                        <TextArea.Input placeholder={`What's happening?`}
                            maxLength={380}
                            cols={10}
                            onChange={handleTextAreaValue}
                            value={tweet}
                            />
                    </TextArea.Root>
                </div>
                <nav className='flex justify-between mb-2 '>
                    <div className="flex justify-between items-center gap-4">
                        <span>
                            <label htmlFor='file-input'>
                             <ImageSquare size={24} className='text-primary-blue cursor-pointer' />
                            </label>
                           
                            <input 
                                onChange={(e) => {
                                    if(e.target.files)
                                    setImage(e.target.files[0])
                                    // uploadImage
                                }} 
                                className='hidden' 
                                id='file-input' 
                                type='file'/>
                        </span>
                        <Icon size='base'>
                            <Gif className='text-primary-blue cursor-pointer'/>
                        </Icon>
                        <Icon size='base'>
                            <ChartBarHorizontal className='text-primary-blue cursor-pointer'/>
                        </Icon >
                        <Icon size='base'>
                            <Smiley className='text-primary-blue cursor-pointer'/>
                        </Icon >
                        <Icon size='base'>
                            <Calendar className='text-primary-blue cursor-pointer'/>
                        </Icon>
                        { image && (
                           
                             <button className='relative' onClick={() => setImage(null)}>
                                <Trash size={24} weight="bold" className='absolute top-2 right-2 text-error opacity-0 hover:opacity-100' />
                                 <img className=' w-10 h-10 border-[2px] border-primary-blue border-opacity-60 rounded-md' src={URL.createObjectURL(image)} alt="" />
                               
                             </button>
                       
                        )}
                       
                    </div>
                    <Button disabled={isNewTweetEmpty} onClick={handleAddTweet} size="tiny">
                        Tweet
                    </Button>
        
                </nav>
            </form>
        </div>

        {
            tweets.map(tweet => (
                <Tweet 
                    // tweet={tweet.tweetContent} 
                    tweetContent={tweet.tweetContent}
                    time={timeago}
                    src={tweet.picture}
                    />
            ))
        }
       
        </>
    )
}
