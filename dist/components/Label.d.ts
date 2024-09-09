import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Label(
  props: ComponentProps<'label'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
