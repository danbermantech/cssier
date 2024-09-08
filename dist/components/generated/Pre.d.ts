import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Pre(
  props: ComponentProps<'pre'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
