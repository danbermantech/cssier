import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Legend(
  props: ComponentProps<'legend'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
