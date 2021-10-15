import styled from 'styled-components'

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #131921;
  z-index: 100;

  img {
    width: 100px;
    margin-top: 18px;
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const HeaderSearch = styled.div`
  display: flex;
  flex: 1;

  .search__icon {
    background-color: #cd9042;
    padding: 5px;
    height: 30px !important;
    font-size: 2rem;
  }

  input {
    height: 30px;
    padding: 10px;
    border: none;
    outline: none;
    width: 100%;
  }
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin: 0 15px;
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