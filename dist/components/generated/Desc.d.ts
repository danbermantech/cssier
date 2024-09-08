import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Desc(
  props: ComponentProps<'desc'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
