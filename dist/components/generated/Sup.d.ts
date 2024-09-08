import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Sup(
  props: ComponentProps<'sup'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
