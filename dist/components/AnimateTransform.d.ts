import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function AnimateTransform(
  props: ComponentProps<'animateTransform'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
