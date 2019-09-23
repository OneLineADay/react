import styled from 'styled-components';


export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: center; */

  .nav-logo {
   width: 50%;
   justify-content: flex-start;
   text-align: left;
  }


  .nav-options{
      display: flex;
      width: 35%;
      justify-content: space-between;
      
     a{
        margin: 2rem, 1rem, 2rem, 1rem;
        color: red;
      }
  }
`;
