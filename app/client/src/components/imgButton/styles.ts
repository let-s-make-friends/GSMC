import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 30%;
`;

export const Input = styled.input`
  display: none;
`;

export const Text = styled.div`
  height: 30px;
  background: #fff;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  padding: 0.4rem 1rem;
  background: #fff;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 1rem;
`;
