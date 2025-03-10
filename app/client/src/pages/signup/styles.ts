import styled from "styled-components";

export const TitleWrapper = styled.div`
  background-color: inherit;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  z-index: 100;
  top: 0;
`;

export const Title = styled.h3`
  color: #fff;
  font-family: "LOTTERIA CHAB", sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  gap: 1rem;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  border-radius: 0.75rem;
  border: 1px solid var(--New-group-gray-100, #eff0f2);
  background: #fefefe;
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 25rem;
  gap: 0.25rem;
`;

export const EmailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  gap: 0.25rem;
`;

export const InputLabel = styled.h2`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 137.5% */
`;
