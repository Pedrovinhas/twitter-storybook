import { Meta, StoryObj } from '@storybook/react'
import { PageNotFound, PageNotFoundProps } from './PageNotFound'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'pages/PageNotFound',
	component: PageNotFound,
	args: {
       
	},
	argTypes: {
		
	},
	decorators: [withRouter]
	
} as Meta<PageNotFoundProps>

export const Default: StoryObj<PageNotFoundProps> = {}