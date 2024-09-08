import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Tr(
  props: ComponentProps<'tr'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
