import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #032541;
  padding: 15px 25px;
  color: #fff;
  .logo {
    font-size: 30px;
    text-transform: capitalize;
    font-weight: 700;
    color: #4ec1c0;
  }
  ul {
    display: flex;
    width: 350px;
    justify-content: space-between;
    font-size: 17px;
    font-weight: 550;
    letter-spacing: .7px;
  }
  a {
    color: #fff;
  }
  select {
    padding: 4px 10px;
    border-radius: 10px;
    &:focus {
      outline: none;
    }
  }

`