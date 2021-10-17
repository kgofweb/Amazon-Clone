import styled from "styled-components";

export const HomeStyled = styled.div`
  margin: 0 auto;
  max-width: 1500px;
`

export const HomeImgStyled = styled.img`
  width: 100%;
  mask-image: linear-gradient(to bottom, rgba(0,0, 0, 1), rgba(0, 0,0, 0));
  margin-bottom: -110px;
  z-index: -1;
`

export const HomeRow = styled.div`
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  margin: 0 5px;
  z-index: 1;

  @media screen and (max-width: 730px) {
    flex-direction: column;
    margin: 0 20px;
  }
`