import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Progress(
  props: ComponentProps<'progress'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
