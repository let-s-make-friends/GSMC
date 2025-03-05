import styled from "styled-components";

interface Button {
  $isActive: boolean;
  $isFull: boolean;
}

export const Button = styled.button<Button>`
  display: flex;
  width: ${(props) => (props.$isFull ? "100%" : "max-content")};
  justify-content: center;
  cursor: pointer;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  border: none;

  background-color: ${(props) => (props.$isActive ? "#003CFF" : "#012CBA")};
`;

export const Label = styled.span<{ $isActive: boolean }>`
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap;
  line-height: 1.375rem; /* 137.5% */

  color: ${(props) => (props.$isActive ? "#FFFFFF" : "#C5C5C5")};
`;
