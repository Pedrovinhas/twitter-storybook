import { Meta, StoryObj } from '@storybook/react'
import { Tweet, TweetProps } from './Tweet'
import TweetImage from '../../public/TweetImage.png'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Components/Tweet',
	component: Tweet,
	args: {
       src: `${TweetImage}`,
	},
	argTypes: {
		
	},
	decorators: [withRouter]
} as Meta<TweetProps>

export const Default: StoryObj<TweetProps> = {}