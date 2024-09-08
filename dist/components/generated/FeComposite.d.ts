import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function FeComposite(
  props: ComponentProps<'feComposite'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
