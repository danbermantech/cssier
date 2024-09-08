import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Filter(
  props: ComponentProps<'filter'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
