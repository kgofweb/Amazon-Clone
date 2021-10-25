import styled from "styled-components";

export const PaymentStyled = styled.div`
  background-color: white;
`

export const PaymentContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;
  }
`

export const PaymentSection = styled.section`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
`

export const PaymentTitle = styled.div`
  flex: 0.2;
`

export const PaymentAdress = styled.div`
  flex: 0.8;
`

export const PaymentItems = styled.div`
  flex: 0.8;
`

export const PaymentDetails = styled.div`
  flex: 0.8;

  form {
    max-width: 400px;
    border: .5px solid lightgrey;
    padding: 20px;
    border-radius: 2px;
  }

  h3 {
    padding: 10px 0;
  }

  button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    font-weight: bolder;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
  }
`