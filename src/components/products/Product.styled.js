import styled from 'styled-components'

export const ProductStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  width: 100%;
  min-width: 100px;
  max-height: 800px;
  background-color: white;
  transition: transform .2s;
  z-index: 1;

  :hover {
    transform: scale(.980);
  }

  @media screen and (max-width: 730px) {
    margin: 10px auto;
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  button {
    background: #f0c14b;
    padding: 5px;
    margin-top: 5px;
    border: 1px solid;
    border-radius: 3px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;

    :hover {
      background-color: #ff9900;
    }
  }
`

export const ProductInfo = styled.div`
  height: 100%;
  margin-bottom: 15px;
`

export const ProductRating = styled.div`
  display: flex;
`

export const ProductPrice = styled.p`
  margin-top: 5px;
`