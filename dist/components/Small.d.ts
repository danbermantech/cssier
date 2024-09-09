import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Small(
  props: ComponentProps<'small'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
