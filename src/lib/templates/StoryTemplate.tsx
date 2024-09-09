//@ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import COMPONENT_NAME from './COMPONENT_NAME'

const meta: Meta<typeof COMPONENT_NAME> = {
  component: COMPONENT_NAME,
}

export default meta
type Story = StoryObj<typeof COMPONENT_NAME>

export const Primary: Story = {
  args: {
    pseudo: {
      hover: {
        background: undefined,
      },
      before: {
        content: "''",
      },
      after: {
        content: "''",
      },
      neutral: {
        fontFamily: 'sans-serif',
      },
      focus: {},
      active: {},
      visited: {},
      link: {},
      disabled: {},
      enabled: {},
    },
    children: 'Please enjoy this example of the "COMPONENT_NAME" component',
  },
}
