import styled from "styled-components";

export const StyledBody = styled.div`
    background: #f2c94c;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const StyledContainer = styled.div`
@import url('https://fonts.googleapis.com/css?family=Cutive+Mono|Encode+Sans+Semi+Condensed&display=swap');
  max-width: 1000px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  .inputDiv{
    display: flex;
    flex-direction: column;
    
  }

  .logoDiv{
 
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;
    background: white;
    border: 1px solid gray;
    margin: 0 0 3rem 0;
    box-shadow: 5px 5px #4f4f4f;

    img{
      width: 400px;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #ffe9a4;
   
    h1{
      font-family: 'Cutive Mono', monospace;
      font-size: 1.4rem;
      margin: 2rem 0 2rem 0;
    }

    h3{
      font-family: 'Encode Sans Semi Condensed', sans-serif;
      font-size: .8rem;
      margin-bottom: .3rem;
    }

    h4{
      font-family: 'Cutive Mono', monospace;
      font-size: 1rem;
      margin: 2rem 0 2rem 0;
    }

    div {
      display: flex;
      flex-direction: column-reverse;
      /* min-width: 100%; */
      width: 50%;
      padding: 1rem 2rem;

      input {
        padding: 0.4rem;
        border-radius: 3px;
        outline: none;
        margin: 1px solid grey;
        font-size: 1.1rem;
        border: none;
        width: 100%;
        margin: auto;
        background: white;

        ::placeholder {
        color: gray;
        opacity: .5; 
      }
      }

      button {
        padding: 0.8rem;
        border-radius: 5px;
        border: none;
        box-shadow: 5px 5px #4f4f4f;
        width: 45%;
        margin: auto;
        background: #55ccf2;
        font-family: 'Cutive Mono', monospace;
        font-size: 1.2rem;

      }
    }
  }
`;

