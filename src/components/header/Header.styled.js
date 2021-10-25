import styled from 'styled-components'

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  background-color: #131921;
  z-index: 100;

  .logo {
    width: 100px;
    margin: 18px 20px 0 8px;
  }
`

export const HeaderOptionCountry = styled.span`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-right: 1.5rem;

  @media screen and (max-width: 670px) {
    display: none;
  }
`

export const HeaderCountry = styled.p`
  font-size: 16px;
  font-weight: 700;
`

export const HeaderSearch = styled.div`
  display: flex;
  flex: 1;

  .search__icon {
    background-color: #ffb200;
    padding: 3px 5px;
    height: 35px;
    font-size: 2.2rem;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  .search__icon:hover {
    background-color: #ff9900;
  }

  input {
    height: 35px;
    padding: 10px;
    border: none;
    outline: none;
    width: 100%;
  }

  input:focus {
    outline: 2.5px solid #ff9900;
  }

  select {
    width: auto;
    height: 35px;
    outline: none;
    border: none;
    background-color: #dfe6e9;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
  }

  select:focus {
    outline: 2.5px solid #ff9900;
  }

  @media screen and (max-width: 940px) {
    input {
      border-radius: 5px 0 0 5px;
    }

    select {
      display: none;
    }
  }
`
export const NavToggle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .country__logo {
    width: 1.7rem;
  }

  @media screen and (max-width: 768px) {
    align-items: flex-end;
    justify-content: space-evenly;
    flex-direction: column;
    position: fixed;
    top: 8vh;
    right: -100%;
    width: 60%;
    height: calc(100% - 8vh);
    padding: 5rem 0;
    background-color: #131921;
    z-index: 100;
  }
`

export const SelectCountry = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 15px;

  select {
    margin-left: .1rem;
    background: none;
    border: none;
    outline: none;
    color: white;
  }

  @media screen and (max-width: 790px) {
    display: none;
  }
`

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin: 0 10px;

  @media screen and (max-width: 768px) {
    text-align: right;
    margin-right: 2rem;
  }
`

export const HeaderOptionLineOne = styled.span`
  font-size: 12px;
  cursor: auto;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

export const HeaderOptionLineTwo = styled.span`
  font-size: 13.5px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const HeaderOptionBasket = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-right: 10px;

  span {
    padding-left: 5px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 2rem;

    span {
      font-size: 1.5rem;
    }

    .MuiSvgIcon-root {
      font-size: 2rem !important;
    }
  }
`