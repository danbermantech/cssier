import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Hr(
  props: ComponentProps<'hr'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
