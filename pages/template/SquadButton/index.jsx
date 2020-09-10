import React from 'react'

import { ButtonItem, PlusIcon, MinusIcon } from './styles'

import If from '../../Component/if'

export default function SquadButton(props) {
  return (
    <If test={!props.hide}>
      <ButtonItem
        onClick={props.onClick}
      >        
        <PlusIcon />
      </ButtonItem>
    </If>
  )
}