import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Link(
  props: ComponentProps<'link'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
