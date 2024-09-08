import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Style(
  props: ComponentProps<'style'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
