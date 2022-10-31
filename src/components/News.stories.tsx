import { Meta, StoryObj } from '@storybook/react'
import { News, NewsProps } from  './News';

export default {
    title: 'Components/News',
    component: News,
    args: {
    },
    argTypes: {}
} as Meta<NewsProps>

export const Default: StoryObj<NewsProps> = {}

