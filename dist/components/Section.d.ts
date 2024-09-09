import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Section(
  props: ComponentProps<'section'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
