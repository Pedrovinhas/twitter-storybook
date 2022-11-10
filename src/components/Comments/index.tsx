import { useState } from 'react'
import moment from 'moment';
import { Avatar } from '../Avatar'
import { Heart, IconWeight, ThumbsUp, Trash } from 'phosphor-react'
import profilePic1 from '../../../public/profile.png'

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
  commentTime: string;
}

export function Comment({ content, onDeleteComment, commentTime }: CommentProps) {
  const [ likeCount, setLikeCount ] = useState(0)
  const [ weight, setWeight ] = useState<IconWeight | undefined>('regular')

  function handleDeleteComment() {
    onDeleteComment(content)
  }
 
  function handleLikeComment() {
    setLikeCount(likeCount + 1)
    setWeight('fill')
  }

  const createdAt = new Date()

  const timeago = moment(createdAt).fromNow();

    return (
        <div className='flex mt-6 gap-2 w-[500px] '>
      <Avatar size='sm' alt='Avatar' src={profilePic1} />

      <div className='w-full '>
        <div className='rounded-sm text-sm dark:text-white bg-dark-8 dark:bg-dark-2 rounded-md py-2 px-4 w-full justify-between '>
         
            <div className='flex justify-between '>
              <strong>Elon </strong>
              <div className='flex items-center gap-2 '>
                <time title='17 de junho às 16h' dateTime="2022-06-17 16:00:00">{timeago}</time>
                <button onClick={handleDeleteComment} title='Deletar comentário'>
                <Trash className='hover:text-error'size={20}/>
                </button>
              </div>
            </div>
            <p className='mt-2'>{content}</p>
          
        </div>
       
        <footer className='h-[40px]'>
          <button className='flex px-4 mb-4 gap-2 items-center text-[#F4245E] ' onClick={handleLikeComment}>
            <Heart weight={weight} size={20} className=''/>
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
 )
}