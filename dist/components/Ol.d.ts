import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Ol(
  props: ComponentProps<'ol'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
