import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Time(
  props: ComponentProps<'time'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
