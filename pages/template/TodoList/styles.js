import styled from 'styled-components'
 
export const Table = styled.div`
  display: flex;
  flex-direction: column;

  > tbody tr {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
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





















