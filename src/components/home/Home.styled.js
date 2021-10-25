import styled from "styled-components";

export const HomeStyled = styled.div`
  margin: 0 auto;
  max-width: 1500px;

  .departs {
    display: flex;
    align-items: flex-start;
  }
`

export const HomeRight = styled.div`
  margin-top: .600rem;
  width: 20%;
  height: 100%;
  padding: 10px;
  border-right: 1px solid #bdc3c7;
  background-color: white;
  z-index: 10;

  h4 {
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    align-items: center;
    padding: 5px 0;

    li {
      margin-left: .3rem;
      font-size: .880rem;
      font-weight: 500;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1420px) {
    display: none;
  }
`

export const HomeImgStyled = styled.img`
  width: 100%;
  mask-image: linear-gradient(to bottom, rgba(0,0, 0, 1), rgba(0, 0,0, 0));
  margin-bottom: -110px;
  z-index: -1;

  @media screen and (max-width: 460px) {
    margin-bottom: -95px;
  }
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