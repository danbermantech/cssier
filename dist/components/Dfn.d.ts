import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Dfn(
  props: ComponentProps<'dfn'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
