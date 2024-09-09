import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Ruby(
  props: ComponentProps<'ruby'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
