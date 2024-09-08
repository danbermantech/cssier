import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Summary(
  props: ComponentProps<'summary'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
