import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6';
import { Follow, FollowProps } from  '../Follow';

export default {
    title: 'Components/Follow',
    component: Follow,
    args: {
    },
    decorators: [withRouter],
    argTypes: {}
} as Meta<FollowProps>

export const Default: StoryObj<FollowProps> = {}

