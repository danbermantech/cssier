import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Template(
  props: ComponentProps<'template'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
