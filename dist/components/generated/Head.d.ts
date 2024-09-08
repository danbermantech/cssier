import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Head(
  props: ComponentProps<'head'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
