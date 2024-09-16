//@ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import COMPONENT_NAME from './COMPONENT_NAME'

const meta: Meta<typeof COMPONENT_NAME> = {
  component: COMPONENT_NAME,
}

export default meta
type Story = StoryObj<typeof COMPONENT_NAME>

export const Primary: Story = {
  name: 'COMPONENT_NAME',
  args: {
    pseudo: {
      neutral: {
        fontFamily: 'sans-serif',
        background: '#23242588',
        borderRadius: '8px',
        padding: '8px',
        width: 'max-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 8px 2px #232425',
      },
      hover: {
        background: '#232425aa',
      },
      focus: {
        border: '2px solid #232425',
      },
      active: {
        background: '#232425',
        color: '#fff',
      },
      visited: {},
      link: {},
      disabled: {},
      enabled: {},
    },
  },
}
