import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Main(
  props: ComponentProps<'main'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
