import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

interface ButtonProps {
  selected?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  border: none;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  border-radius: 0.75rem;
  background: ${({ selected }) => (selected ? "#003CFF" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  display: flex;
  padding: 0.75rem 2rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background: ${({ selected }) => (selected ? "#002ECC" : "#f1f1f1")};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
