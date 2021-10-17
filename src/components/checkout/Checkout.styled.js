import styled from "styled-components";

export const CheckoutStyled = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;

  img {
    width: 100%;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 730px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CheckoutTitle = styled.h2`
  padding: 10px 0;
  font-weight: 700;
  border-bottom: 1px solid lightgray;
`

export const CheckoutLeft = styled.div`

`
export const CheckoutRight = styled.div`

`