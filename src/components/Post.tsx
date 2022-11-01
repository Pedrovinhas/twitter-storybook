import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from "./Avatar";
import { TextArea } from "./TextArea";
import Profile from '../../public/profile.png'
import {
    Calendar,
    ChartBarHorizontal,
    Gif,
    ImageSquare,
    Smiley
} from "phosphor-react";
import { Icon } from "./Icon";
import { Button } from "./Button";
import React, { ChangeEvent, useState } from "react";
import { Tweet } from "./Tweet";
import Thumbnail2 from '../../public/TweetImage-3.png'

export interface TweetPostProps {
    tweetContent: string;
    time: string;
    thumbnail?: string;
   
}

export function Post({ tweetContent, time, thumbnail }: TweetPostProps) {

    const [tweets, setTweets] = useState<TweetPostProps[]>([])
    const [tweet, setTweet] = useState('')

    const publishedAt = Date.now()

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
       addSuffix: true,
       includeSeconds: true,
       
    })

    function handleAddTweet() {
        const newTweet = {
            tweetContent: tweet,
            time: publishedDateRelativeToNow,
            publishedAt: publishedAt
        }
     
        setTweets(prevState => [...prevState, newTweet])
        setTweet('')
    }
        
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    function handleTextAreaValue(e: ChangeEvent<HTMLTextAreaElement>) {
                setTweet(e.target.value)
               
    }

    const isNewTweetEmpty = tweet.length === 0

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
                        <Icon size='base'>
                            <ImageSquare className='text-primary-blue cursor-pointer'/>
                        </Icon>
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
                    tweet={tweet.tweetContent} 
                    time={tweet.time}
                    src={Thumbnail2}
                    />
            ))
        }
       
        </>
    )
}
