import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { useAnimation, useStylesheet } from '.'
import { AnimationDefinition, PseudoCss } from '../types'

const Example = ({
  styles,
  anim1,
  hoverAnimation,
}: {
  styles: PseudoCss
  anim1: AnimationDefinition
  hoverAnimation: AnimationDefinition
}) => {
  const [animationId1, animation1] = useAnimation(anim1, anim1.name)

  const [animationId2, animation2] = useAnimation(hoverAnimation, hoverAnimation.name)

  const [pseudoId] = useStylesheet({ ...styles, hover: { animation: [animation1, animation2].join(', ') } })

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
      <div className={`${pseudoId} ${animationId1} `}>Hover over Me</div>
    </div>
  )
}

const meta: Meta<typeof Example> = {
  component: Example,
}

export default meta
type Story = StoryObj<typeof Example>

export const Primary: Story = {
  name: 'useAnimation',
  args: {
    anim1: {
      name: 'example',
      keyframes: {
        from: { borderRadius: '4px', color: 'red' },
        to: { borderRadius: '100%', color: 'blue' },
      },
      duration: '2s',
      timingFunction: 'ease-in-out',
      direction: 'alternate',
      iterationCount: 'infinite',
    },
    hoverAnimation: {
      name: 'animation',
      keyframes: {
        from: { background: 'blue', transform: 'rotate(0deg)', color: 'red' },
        // '50%':{borderRadius:'18px', color:'green'},
        to: { background: 'red', transform: 'rotate(360deg)', color: 'blue' },
      },
      duration: '2s',
      timingFunction: 'ease-in-out',
      direction: 'alternate',
      iterationCount: 'infinite',
    },
    styles: {
      neutral: {
        position: 'relative',
        borderRadius: '4px',
        padding: '8px',
        transition: 'all 0.5s ease-in-out',
        background: 'white',
        border: 'none',
      },
    },
  },
}
