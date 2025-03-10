import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 0.5rem;
  position: relative;
`;

export const DropdownButton = styled.button`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.625rem;
  padding: 0.625rem 1rem;
  text-align: left;
  background-color: white;
  border: 1px solid #ccc;
  cursor: pointer;
  appearance: none;

  &:hover {
    background-color: #f1f1f1;
  }

  &:focus {
    outline: none;
    border-color: #999;
  }
`;

export const OptionsList = styled.ul`
  position: absolute;
  width: 100%;
  border-radius: 0.625rem;
  background-color: white;
  border: 1px solid #ccc;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  top: 4rem;
`;

export const Option = styled.li`
  width: 100%;
  color: #111;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;
