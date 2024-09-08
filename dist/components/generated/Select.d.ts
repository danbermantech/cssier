import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Select(
  props: ComponentProps<'select'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
