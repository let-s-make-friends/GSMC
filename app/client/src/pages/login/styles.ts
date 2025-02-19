import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 2rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 48px;
  gap: 48px;
  border-radius: 12px;
  border: 1px solid var(--New-group-gray-100, #eff0f2);
  background: #fefefe;
`;

export const EmailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-end;
`;
