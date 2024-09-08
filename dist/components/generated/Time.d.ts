import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Time(
  props: ComponentProps<'time'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
