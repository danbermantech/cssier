import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Datalist(
  props: ComponentProps<'datalist'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
