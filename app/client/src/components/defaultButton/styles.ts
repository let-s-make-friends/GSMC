import styled from "styled-components";

export const Button = styled.button<{ $isActive: boolean }>`
  padding: 0.8125rem 1rem;
  border-radius: 0.75rem;
  border: none;
  background-color: ${({ $isActive }) => ($isActive ? "#003CFF" : "#012CBA")};
`;

export const Label = styled.span<{ $isActive: boolean }>`
  text-align: center;

  color: ${({ $isActive }) => ($isActive ? "#FFFFFF" : "#C5C5C5")};
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`;
