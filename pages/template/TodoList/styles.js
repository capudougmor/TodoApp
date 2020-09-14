import styled, { css } from 'styled-components'
 
export const Description = styled.td`
  ${props => props.markAsDone == 'markAsDone' && css`
    text-decoration: line-through;
    color: #666;
    `
  }
`

export const Table = styled.table`
  display: flex;
  flex-direction: column;

  > tbody tr {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  }

  & hr {
  border: 0;
  height: 2px;
  background-image: linear-gradient(to right, transparent, #CCC, transparent);  
  margin-bottom: 10px;
}

`

export const Menu = styled.tr`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;

`

export const Form = styled.div`
  height: 30px;
  margin: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;

  > input {
    flex: 1;
    height: 30px;
    padding:16px;
    border: none;
    border-radius:6px;
  }

`





















