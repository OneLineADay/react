import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 480px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      flex-direction: column-reverse;
      min-width: 100%;
      padding: 1rem 2rem;

      input {
        padding: 0.4rem;
        border-radius: 3px;
        outline: none;
        margin: 1px solid grey;
        font-size: 1.1rem;
      }

      button {
        padding: 0.8rem;
      }
    }
  }
`;
