import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 30%;
`;

export const TextareaInput = styled.textarea`
  resize: none;
  overflow-y: auto;
  width: 100%;
  padding: 0.625rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.625rem;
  outline: none;
  font-size: 1rem;
  font-family: Pretendard;
  font-weight: 400;
  min-height: 8rem;

  scrollbar-width: thin;
  scrollbar-color: white;
`;

export const Length = styled.span`
  color: #111;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
`;
