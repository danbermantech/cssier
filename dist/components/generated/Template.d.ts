import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Template(
  props: ComponentProps<'template'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
