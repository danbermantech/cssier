import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Dd(
  props: ComponentProps<'dd'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
