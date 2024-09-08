import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Object(
  props: ComponentProps<'object'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
