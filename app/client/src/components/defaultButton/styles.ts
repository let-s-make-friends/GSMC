import styled from "styled-components";

export const Button = styled.button<{ $isActive: boolean }>`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: ${({ $isActive }) => ($isActive ? "#003CFF" : "#012CBA")};
`;

export const Label = styled.span<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? "#FFFFFF" : "#C5C5C5")};
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;
