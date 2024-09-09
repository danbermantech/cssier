import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function U(
  props: ComponentProps<'u'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
