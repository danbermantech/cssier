import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Symbol(
  props: ComponentProps<'symbol'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
