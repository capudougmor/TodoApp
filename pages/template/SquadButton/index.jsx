import React from 'react'

import { ButtonItem, PlusIcon, UndoIcon, TrashIcon, CheckIcon, InfoIcon, ClearIcon } from './styles'

import If from '../../Component/if'

export default function SquadButton(props) {
  return (
    <If test={!props.hide}>
      <ButtonItem
        onClick={props.onClick}
        icon={props.icon}
      >       
        {props.icon === 'plus' && <PlusIcon  />}
        {props.icon === 'trash' && <TrashIcon  />}
        {props.icon === 'undo' && <UndoIcon  />}
        {props.icon === 'check' && <CheckIcon  />}
        {props.icon === 'info' && <InfoIcon  />}
        {props.icon === 'clear' && <ClearIcon  />}
      </ButtonItem>
    </If>
  )
}