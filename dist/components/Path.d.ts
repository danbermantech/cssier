import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Path(
  props: ComponentProps<'path'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
