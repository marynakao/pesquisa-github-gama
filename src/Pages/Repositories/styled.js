import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: auto;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #fff;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: .5rem 0;
  background: #b7b7b7;
  color: #000;
  padding: .5rem;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #515151;
  padding: .5rem 0;
  color: #fff;
  text-decoration: none;
`;
