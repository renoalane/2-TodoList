import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const LoaderDiv = styled.div`
  display: flex;
  gap: 0.5em;
`;

const Loading = styled.div`
  width: 1em;
  height: 1em;
  background: #000;
  animation: ${pulse} 1s infinite;
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const Loader = () => {
  return (
    <LoaderDiv>
      <Loading />
      <Loading />
      <Loading />
    </LoaderDiv>
  );
};

export default Loader;
