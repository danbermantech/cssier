import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { useAnimation, useStylesheet } from '.'
import { AnimationDefinition, PseudoCss } from '../types'

const Example = ({ styles }: { styles: PseudoCss }) => {
  const [pseudoId] = useStylesheet(styles)

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        gap: '24px',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '240px',
      }}
    >
      <div tabIndex={0} className={pseudoId}>
        Hover over Me
      </div>
    </div>
  )
}

const meta: Meta<typeof Example> = {
  component: Example,

  argTypes: {
    styles: { control: { type: 'object' } },
  },
}

export default meta
type Story = StoryObj<typeof Example>

export const Primary: Story = {
  name: 'useStylesheet',
  args: {
    styles: {
      neutral: {
        height: 'min-content',
        position: 'relative',
        borderRadius: '4px',
        padding: '8px',
        transition: 'all 0.5s ease-in-out',
        background: 'white',
        border: '4px solid black',
        display: 'flex',
      },
      hover: {
        background: 'black',
        color: 'white',
        transform: 'scale(1.1)',
        boxShadow: '0 0 8px 2px black',
      },
      focus: {
        boxShadow: '0 0 8px 2px red',
        and: {
          after: {
            content: "''",
            height: '1rem',
            width: '1rem',
            position: 'relative',
            background: 'green',
            display: 'inline-block',
            borderRadius: '0.5rem',
            marginLeft: '0.5rem',
            zIndex: 1,
          },
        },
      },
      active: {
        border: '2px solid blue',
      },
    },
  },
}
