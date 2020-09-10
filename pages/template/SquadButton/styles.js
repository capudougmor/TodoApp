import styled from 'styled-components'
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

export const ButtonItem = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px;
  background-color: #254;
  border: none;
  border-radius:6px;

  cursor: pointer;

  &:hover{
    opacity: 0.9;
  }

`

export const MinusIcon = styled(FaMinus)`
  width: 24px;
  color: white;

`

export const PlusIcon = styled(FaPlus)`
  width: 24px;
  color: white;

`




















