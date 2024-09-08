import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Dialog(
  props: ComponentProps<'dialog'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
