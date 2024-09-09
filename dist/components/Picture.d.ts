import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Picture(
  props: ComponentProps<'picture'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
