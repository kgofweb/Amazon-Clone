import styled from "styled-components";

export const SubTotalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 5px 20px 15px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;

  button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }

  @media screen and (max-width: 730px) {
    width: 450px;
  }
`

export const SubTotalGift = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 5px;
  }
`