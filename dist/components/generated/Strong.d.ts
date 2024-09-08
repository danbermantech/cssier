import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Strong(
  props: ComponentProps<'strong'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
