import styled from "styled-components";

export const CheckoutProductStyled = styled.div`
  display: flex;
  padding: 15px 0;
  margin: 20px 0;
  background-color: white;

  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
`

export const ProductInfo = styled.div`
  padding-left: 20px;

  p {
    font-size: 17px;
    font-weight: 600;
  }

  button {
    background: #f0c14b;
    border: 1px solid;
    padding: 1px;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`