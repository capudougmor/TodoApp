import styled, { css } from 'styled-components'
import { FaPlus, FaUndo, FaTrash, FaCheck, FaSearch, FaTimes } from 'react-icons/fa'

export const ButtonItem = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background-color:#21618C;
  border: none;
  border-radius:6px;
  cursor: pointer;

  ${props => props.icon === 'trash' && css`
    background-color: #D35400;  
    `
  }
  ${props => props.icon === 'check' && css`
    background-color: #2ECC71;  
    `
  }
  ${props => props.icon === 'undo' && css`
    background-color: #F5B041;  
    `
  }
  ${props => props.icon === 'info' && css`
    background-color: #85C1E9;  
    `
  }
  ${props => props.icon === 'clear' && css`
    background-color: #fff;  
    `
  }

  &:hover{
    opacity: 0.9;
  }

`

export const UndoIcon = styled(FaUndo)`
  width: 24px;
  color: white;
`

export const PlusIcon = styled(FaPlus)`
  width: 24px;
  color: white;
`

export const CheckIcon = styled(FaCheck)`
  width: 24px;
  color: white;
`

export const TrashIcon = styled(FaTrash)`
  width: 24px;
  color: white;
`

export const InfoIcon = styled(FaSearch)`
  width: 24px;
  color: white;
`
export const ClearIcon = styled(FaTimes)`
  width: 24px;
  color: #000;
`




















