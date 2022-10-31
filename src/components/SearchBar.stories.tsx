import { Meta, StoryObj } from '@storybook/react'
import { SearchBar, SearchBarProps } from  './SearchBar';

export default {
    title: 'Components/SearchBar',
    component: SearchBar,
    args: {
        placeholder: 'Search Twitter'
    },
    argTypes: {}
} as Meta<SearchBarProps>

export const Default: StoryObj<SearchBarProps> = {}

