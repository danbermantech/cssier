import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Code(
  props: ComponentProps<'code'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
