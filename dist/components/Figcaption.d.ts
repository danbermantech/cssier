import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Figcaption(
  props: ComponentProps<'figcaption'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
