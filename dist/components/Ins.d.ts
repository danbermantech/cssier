import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Ins(
  props: ComponentProps<'ins'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
