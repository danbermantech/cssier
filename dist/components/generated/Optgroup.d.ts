import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Optgroup(
  props: ComponentProps<'optgroup'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
