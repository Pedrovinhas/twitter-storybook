import { Meta, StoryObj } from '@storybook/react'
import { Post, TweetPostProps } from  './Post';
import { withRouter } from 'storybook-addon-react-router-v6';



export default {
    title: 'Components/Post',
    component: Post,
    args: {
        
    },
    decorators: [withRouter],
    argTypes: {}
} as Meta<TweetPostProps>

export const Default: StoryObj<TweetPostProps> = {}

