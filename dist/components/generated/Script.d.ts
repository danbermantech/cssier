import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Script(
  props: ComponentProps<'script'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
