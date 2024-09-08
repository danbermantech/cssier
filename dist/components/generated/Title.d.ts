import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Title(
  props: ComponentProps<'title'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
