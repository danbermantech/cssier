import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Data(
  props: ComponentProps<'data'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
