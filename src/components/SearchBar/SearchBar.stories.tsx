import { Meta, StoryObj } from '@storybook/react'
import { SearchBar, SearchBarRootProps } from  '../SearchBar';
import { MagnifyingGlass } from 'phosphor-react';

export default {
    title: 'Components/SearchBar',
    component: SearchBar.Root,
    args: {
        children: [
            <SearchBar.Icon>
                <MagnifyingGlass/>
            </SearchBar.Icon>,
            <SearchBar.Input placeholder='Search Twitter' />
           
        ],
    },
    argTypes: {}
} as Meta<SearchBarRootProps>

export const Default: StoryObj<SearchBarRootProps> = {}

