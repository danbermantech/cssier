import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Col(
  props: ComponentProps<'col'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
