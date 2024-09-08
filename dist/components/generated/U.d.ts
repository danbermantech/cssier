import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function U(
  props: ComponentProps<'u'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
