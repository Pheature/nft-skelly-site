// React
import React from "react";

// Styled Components
import styled from "styled-components";

// Redux
import { Provider } from "react-redux";
import store from "../../store/index";

// Components
import MintHeader from "./MintHeader/MintHeader";
import MintInfo from "./MintInfo/MintInfo";
import MintAmount from "./MintAmount/MintAmount";
import MintTotal from "./MintTotal/MintTotal";
import MintButton from "./MintButton/MintButton";

const Mint = () => {
  return (
    <Provider store={store}>
      <div id="mint"></div>
      <Wrapper id="mint">
        <MintHeader />
        <MintInfo />
        <MintAmount />
        <MintTotal />
        <MintButton />
      </Wrapper>
    </Provider>
  );
};

export default Mint;

const Wrapper = styled.div`
  padding: 40px 0;
  height: min-content;
  z-index: 1000;
  margin: 0 auto;
  margin-top: 150px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 550px;
  @media only screen and (max-width: 575px) {
    width: 95%;
  }

  border: 1px solid #9e323d;
  border-radius: 10px;
`;
