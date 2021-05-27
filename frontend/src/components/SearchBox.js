import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const InputField = styled.input`
  appearance: none;
  background: transparent;
  border: 5px;
  color: inherit;
  flex-grow: 1;
  margin-left: 10px;

  &::placeholder {
    color: hsl(200, 15%, 8%);
  }

  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 10px 20px;
  border-radius: 5px;
  background: hsl(0, 0%, 100%);
  padding: 10px;
  align-items: center;
  max-width: 800px;
  min-width: 600px;
  flex-grow: 1;
  float: left;
  border: 0.5px solid;
  border-color: rgba(50, 115, 220, 0.3);
  height: 39px
`;

export default function SearchBox(props) {
  return (
    <Container>  
      <AiOutlineSearch />
      <InputField type="search" {...props} />
    </Container>
  );
}
