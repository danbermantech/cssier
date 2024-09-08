import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function ClipPath(
  props: ComponentProps<'clipPath'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
