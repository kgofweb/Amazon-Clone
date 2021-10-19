import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 50px 100px;
  height: 100%;
  color: white;
  background-color: #232F3E;

  img {
    width: 100px;
  }

  h2 {
    font-size: .999rem;
  }

  li {
    font-size: 14px;
    padding: 6px 0;
    color: gray;
    cursor: pointer;
    transition: .3s;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 730px) {
    flex-direction: column;
    padding: 20px;

    img {
      margin-top: 30px;
    }

    div {
      margin: 25px 0;
    }
  }
`