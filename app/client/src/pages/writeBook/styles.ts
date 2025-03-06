import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  align-items: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: #fff;
  font-family: "LOTTERIA CHAB";
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

export const Wrapper = styled.div`
  width: 30%;
`;

export const WhiteBtn = styled.button`
  width: 100%;
  display: flex;
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  background: #fefefe;
  margin-top: 2rem;
  border: none;
  margin-bottom: 0.5rem;
  color: #003cff;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem; /* 137.5% */
  cursor: pointer;
`;
