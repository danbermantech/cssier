import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function FeComponentTransfer(
  props: ComponentProps<'feComponentTransfer'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
