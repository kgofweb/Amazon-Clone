import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1500px;

  img {
    width: 100%;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: -1;
  }
`