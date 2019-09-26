import styled from 'styled-components';


export const StyledContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap');

  display: flex;
  justify-content: space-around;
  align-content: center;
  height: 120px;
  font-family: 'Cutive Mono', monospace;
  background: white;
  width: 100%;
 
  /* align-items: center; */

  .nav-logo {
   width: 50%;
   justify-content: flex-start;
   text-align: left;
   margin: auto;
  }


  .nav-options{
      display: flex;
      width: 40%;
      justify-content: space-between;
      margin-right: 5%;
      
     a{
        margin: 2rem, 1rem, 2rem, 1rem;
        display: flex;
        margin: auto;
        font-size: 1.5rem;
        text-decoration: none;
        &:hover{
          color: gray;
          cursor: pointer;
        }
      }
  }
`;
