import styled from 'styled-components'
import { FaPlus } from 'react-icons/fa'
 
export const Container = styled.div`
  margin: 20px 0;
  width: 100%;

`
export const Form = styled.div`
  height: 30px;
  margin: 20px 0;
  width: 100%;

  > input {
    width: 70%;
    height: 30px;
    padding:16px;
    border: none;
    border-radius:6px;
  }

`

export const ButtonSoma = styled.button`
  width: 30px;
  height: 30px;
  margin: 20px;
  background-color: #254;
  border: none;
  border-radius:6px;

`

export const ButtonIcon = styled(FaPlus)`
  width: 24px;
  color: white;

`




















