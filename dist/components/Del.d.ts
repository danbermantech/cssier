import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Del(
  props: ComponentProps<'del'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
