import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Area(
  props: ComponentProps<'area'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
