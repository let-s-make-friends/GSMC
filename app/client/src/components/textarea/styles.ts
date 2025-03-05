import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 30%;
`;

export const TextareaInput = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.625rem;
  resize: none;
  outline: none;
  font-size: 1rem;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: hidden;
  min-height: 2.5rem;
`;

export const Length = styled.span`
  color: #111;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
