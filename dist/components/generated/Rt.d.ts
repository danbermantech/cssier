import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Rt(
  props: ComponentProps<'rt'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
