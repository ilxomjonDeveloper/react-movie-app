import styled from "styled-components";

export const StyledSingleMovie = styled.div`
  background-image: url(${props => props.backdrop_path});
  width: 100%;
  height: 70vh;
  background-size: cover;
`