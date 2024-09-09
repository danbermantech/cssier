import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Body(
  props: ComponentProps<'body'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
