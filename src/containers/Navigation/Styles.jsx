import styled from "styled-components";

export const StyledContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap");

border: 1px solid greenyellow;
  display: flex;
  justify-content: space-between;
  height: 80px;
  font-family: "Cutive Mono", monospace;
  background: white;
  width: 100%;

  .nav-logo {
    width: 40%;
  }

  .nav-options {
    display: flex;
    width: 25%;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;

    a {
      font-size: 1.5rem;
      text-decoration: none;
      &:hover {
        color: gray;
        cursor: pointer;
      }
    }
  }
`;
