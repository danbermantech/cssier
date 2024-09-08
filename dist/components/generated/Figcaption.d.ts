import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Figcaption(
  props: ComponentProps<'figcaption'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
