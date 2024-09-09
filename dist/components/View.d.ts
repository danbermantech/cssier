import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function View(
  props: ComponentProps<'view'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
