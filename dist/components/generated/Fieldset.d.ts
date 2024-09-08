import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Fieldset(
  props: ComponentProps<'fieldset'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
