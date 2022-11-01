import { Meta, StoryObj } from '@storybook/react'
import { News, NewsProps } from  '.';
import { withRouter } from 'storybook-addon-react-router-v6';



export default {
    title: 'Components/News',
    component: News,
    args: {
        
    },
    decorators: [withRouter],
    argTypes: {}
} as Meta<NewsProps>

export const Default: StoryObj<NewsProps> = {}

