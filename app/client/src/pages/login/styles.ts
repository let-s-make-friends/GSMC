import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  gap: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 3rem;
  gap: 3rem;

  border-radius: 0.75rem;
  border: 1px solid var(--New-group-gray-100, #eff0f2);
  background: #fefefe;
`;
