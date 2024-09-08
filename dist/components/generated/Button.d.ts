import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Button(
  props: ComponentProps<'button'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
