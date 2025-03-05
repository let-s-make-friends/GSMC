import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 0.5rem;
`;

export const DropdownContainer = styled.select`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.625rem;
  border: none;
  padding: 0.625rem 1rem;

  appearance: none;
  background: white
    url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20' fill='gray'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")
    no-repeat right 10px center;
  outline: none;
`;
