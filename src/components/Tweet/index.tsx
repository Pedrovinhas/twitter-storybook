
import { Avatar } from "../Avatar";
import { Text } from '../Text'
import Profile from '../../../public/profile.png'
import { Icon } from "../Icon";
import { ArrowsClockwise, ChatCircle, Export, Heart } from "phosphor-react";
import { Link } from 'react-router-dom'
import { TweetProps } from "../../types/tweetProps";
import { Comment } from '../Comments'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import moment from "moment";

  
export function Tweet(props : TweetProps) {
    const storageUser = JSON.parse(sessionStorage.getItem('user') || '{}')
    const [ comments, setComments ] = useState([
        'Parabéns'
       ])
       
  const [ newCommentText, setNewCommentText ] = useState('')

    function handleCreateNewComment(e: FormEvent) {
     e.preventDefault()
        
     setComments([newCommentText, ...comments])
     setNewCommentText('')
    }
    
    function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity('')
        setNewCommentText(e.target.value)
      }
    
      function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity('Esse campo é obrigatório')
      }
    
      function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
          return comment !== commentToDelete
        })
    
        setComments(commentsWithoutDeleteOne)
      }

      const createdAt = new Date()

      const timeago = moment(createdAt).fromNow();
     
    //   const emailSpliced =  storageUser.email.slice(0, storageUser.email.indexOf('@'))

    return (
            <div className="border-[1px] mt-04 border-dark-7 border-b-dark-7 dark:border-dark-4 ">
                <div className='flex gap-6 ml-4 mr-4 mt-2'>
                    <Avatar size={"md"} src={Profile} alt={'Biscuit'}/>
                    <div>
                        <div>
                            <Text size="md" className='text-black  font-bold mr-1 dark:text-white' >
                               {   
                                        storageUser.displayName == null 
                                        ? 
                                        'User not found'
                                        : 
                                        storageUser.displayName
                                }
                            </Text>
                            <Text size='md' className="text-dark-5 mr-1">
                                @{   
                                        storageUser.displayName === null 
                                        ? 
                                        'User not found'
                                        : 
                                        storageUser.displayName
                                }
                            </Text>
                            <Text size='md' className="text-dark-5 mr-1">
                                •
                            </Text>
                            <Text size='md' className="text-dark-5 ">
                                {timeago}
                             </Text>
                    
                        </div>
                        
                        <div>
                            <Text size='md' className="text-black dark:text-white">
                                 {props.tweetContent}
                                 {/* props.tweet */}
                            </Text>
                        </div>
                        {
                            props.src &&  <div > 
                                            <img src={props.src} alt="Imagem do Tweet" className='rounded-lg mt-4 dark:border-[1px] dark:border-dark-5' />
                                        </div>
                        }
                       
                        <div className="flex gap-[86px] mt-4">
                            <span className="flex">
                                <Icon children={<ChatCircle weight="regular" size={20} className="text-dark-5 mr-2"/>}/>
                                <Text size='md'  className="text-dark-5 font-medium">
                                    61
                                </Text>
                            </span>
                            <span className="flex">
                                <Icon children={<ArrowsClockwise weight="regular" size={20} className="text-dark-5 mr-2"/>}/>
                                <Text size='md' className="text-dark-5 font-medium">
                                    12
                                </Text>
                            </span>
                            <span className="flex">
                                <Icon children={<Heart weight="fill"  size={20} className="text-[#F4245E] mr-2"/>}/>
                                <Text size='md'  className="text-[#F4245E] font-medium">
                                    6.2K
                                </Text>
                            </span>
                            <span className="flex">
                                <Icon children={<Export weight="regular"  size={20} className="text-dark-5 mr-2"/>}/>
                                <Text asChild size='md'  className="text-dark-5 font-medium">
                                    <a href=""> 61 </a>
                                </Text>
                            </span>
                        
                        </div>
                        <div className='mt-4 mb-4'>
                            <Text size='sm' asChild className='  pb-2'>
                              <Link to='*' className='text-primary-blue font-medium'>
                                Show this thread
                             </Link>
                            </Text>
                        </div>

                        <form onSubmit={handleCreateNewComment} className='flex flex-col h-[100px] gap-4'>
                              

                                <textarea 
                                className='border-none overflow-hidden bg-dark-8 dark:bg-dark-2 dark:text-white p-4 h-full resize-none text-sm outline-none w-full'
                                onChange={handleNewCommentChange} 
                                value={newCommentText} 
                                placeholder='Leave a comment'
                                onInvalid={handleNewCommentInvalid}
                                required
                                />

                                <footer>
                                    <button className='dark:text-white border-[1px] border-dark-6 dark:border-dark-2  rounded-full w-16 h-8 text-md pointer' type='submit' disabled={newCommentText.length === 0}>Post</button>
                                </footer>
                                </form>
                        
                        <div>
                            {comments.map(comment => {
                                return (
                                <Comment 
                                key={comment} 
                                content={comment}
                                commentTime={timeago}
                                onDeleteComment={deleteComment}
                                />
                                )
                            })}
                         </div>
                        
                    </div>
                    
                </div>
            </div>
    )
}