import styled from "styled-components";

export const StyledContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap");

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
    padding-right: 1rem;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    &:hover {
      color: gray;
      cursor: pointer;
    }
  }
`;
