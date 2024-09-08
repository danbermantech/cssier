import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Bdo(
  props: ComponentProps<'bdo'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
