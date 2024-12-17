import styled from "styled-components";

const WrapperFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: darkcyan;
  color: #fff;
  font-size: 0.8em;
  min-height: 10vh;
`;

const SpanFooter = styled.span`
  color: rgb(160, 160, 160);
  font-weight: 200;
`;

const Footer = () => {
  return (
    <WrapperFooter>
      <p>
        make with <SpanFooter>coffee</SpanFooter> destroyer
      </p>
    </WrapperFooter>
  );
};

export default Footer;
