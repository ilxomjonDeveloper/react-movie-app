import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 30px 10px;
  border-radius: 15px;
  box-shadow: 0px 2px 10px #bbb;
  height: 540px;
  width: 240px;
  img {
    width: 240px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  div {
    position: absolute;
    top: 330px;
    left: 30px;
    background-color: #081c22;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0px 3px 8px #333;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      background-color: #081c22;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      sup {
        font-size: 12px;
      }
    }
  }
  h2 {
    margin-top: 40px;
    font-size: 22px;
    font-weight: 600;
    color: #101010;
    padding: 0 15px;
  }
  p {
    padding: 0 15px;
    color: #a7a7a7;
  }
`;
