import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Option(
  props: ComponentProps<'option'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
