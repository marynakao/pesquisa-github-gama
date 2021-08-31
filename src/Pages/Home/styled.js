import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #fff;
  margin-top: 3em;
`

export const Input = styled.input`
border: 1px solid #ddd;
height: 1.5rem;
padding: 0 .5rem;
border-radius: .25rem 0 0 .25rem;
margin-bottom: 5em;

&:focus,
&:active {
    outline: none;
    box-shadow: none;
}`

export const Button = styled.button`
height: 1.7rem;
border: 1px solid #000;
background: #1f1f1f;
color: #fff;
border-radius: 0 .25rem .25rem 0;
margin-bottom: 5em;
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`