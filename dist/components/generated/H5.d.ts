import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function H5(
  props: ComponentProps<'h5'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
