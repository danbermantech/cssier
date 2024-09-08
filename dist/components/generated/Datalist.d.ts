import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Datalist(
  props: ComponentProps<'datalist'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
