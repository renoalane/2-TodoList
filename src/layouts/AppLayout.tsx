import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

// Wrapper
const WrapperDiv = styled.div`
  padding: 0.5em;
  margin: 1em 1.5em;
  border: 1px solid black;
  box-shadow: 0.3em 0.3em #ddd;
`;

const AppLayout = () => {
  return (
    <div>
      <main>
        {/* HEADER */}
        <WrapperDiv>
          <Header />
        </WrapperDiv>
        {/* BODY */}
        <WrapperDiv>
          <Outlet />
        </WrapperDiv>
        {/* FOOTER */}
        <Footer />
      </main>
    </div>
  );
};

export default AppLayout;
