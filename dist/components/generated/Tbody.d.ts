import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Tbody(
  props: ComponentProps<'tbody'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
