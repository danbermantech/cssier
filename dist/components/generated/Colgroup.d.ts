import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Colgroup(
  props: ComponentProps<'colgroup'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
