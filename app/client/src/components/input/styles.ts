import styled from "styled-components";

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid #696a6c;

  font-family: Inter;
  font-style: normal;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InputLabel = styled.h2`
  color: #000;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`;
