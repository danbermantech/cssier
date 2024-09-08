import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function FeBlend(
  props: ComponentProps<'feBlend'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
