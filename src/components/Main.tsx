import {Header} from "./Header";
import {Post} from "./Post";
import {Tweet} from "./Tweet";
import TweetImage from '../../public/TweetImage.png'
import TweetImage2 from '../../public/TweetImage-2.png'

export interface MainProps {
    className?: string
}

export function Main(props: MainProps) {
    return (
        <div className="flex flex-col gap-2 mr-6 w-[602px]">
            <div>
                <Header/>
                <Post tweetContent="" time=""/>
            </div>
            <div>
                <Tweet time="23s" tweet="Tom is in a big hurry." src={TweetImage}/>
                <Tweet time="46s" tweet='Tom is definetily in a big hurry.'src={TweetImage2}/>
            </div>

        </div>
    )
}
