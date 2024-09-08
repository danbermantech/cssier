import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Mask(
  props: ComponentProps<'mask'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
