import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Meta(
  props: ComponentProps<'meta'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
