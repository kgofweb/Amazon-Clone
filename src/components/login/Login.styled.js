import styled from "styled-components";

export const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 100vh;

  img {
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
  }
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid lightgray;

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  form > h5 {
    margin-bottom: 5px;
  }

  form > input {
    width: 98%;
    height: 30px;
    padding: 0 5px;
    font-size: .900rem;
    margin-bottom: 10px;
    background-color: white;
  }

  p {
    margin-top: 15px;
    font-size: 12px;
  }
`

export const SignInButton = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
`

export const RegisterButton = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
`