import { Meta, StoryObj } from '@storybook/react'
import { Tweet, TweetProps } from './Tweet'
import TweetImage from '../../public/TweetImage.png'


export default {
	title: 'Components/Tweet',
	component: Tweet,
	args: {
       src: `${TweetImage}`,
	},
	argTypes: {
		
	}
} as Meta<TweetProps>

export const Default: StoryObj<TweetProps> = {}