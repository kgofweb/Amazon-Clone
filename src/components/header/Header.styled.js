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
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .country__logo {
    width: 1.7rem;
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
`

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin: 0 10px;
`

export const HeaderOptionLineOne = styled.span`
  font-size: 12px;
  cursor: auto;
`

export const HeaderOptionLineTwo = styled.span`
  font-size: 13.5px;
  font-weight: 700;
`
export const HeaderOptionBasket = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-right: 10px;

  span {
    padding-left: 5px;
  }
`