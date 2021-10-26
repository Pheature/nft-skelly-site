// React
import React, { useState, useEffect } from "react";

// Styled Components
import styled from "styled-components";

// Ethers
import { ethers } from "ethers";

// Material UI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// Web3Modal
import Web3Modal from "web3modal";

// Contract
import SmartContract from "../../../ABI/ABI.json";

const SmartContractAddress = "0x412Fa2e94365382Ef567FB7386124BBeCfB2B94f";

const MintInfo = () => {
  const [remaining, setRemaining] = useState("");

  const getRemaining = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/288daa6de7c64735bbe5620bf41728de"
    );

    const contract = new ethers.Contract(
      SmartContractAddress,
      SmartContract,
      provider
    );

    const total = await contract.totalSupply();

    setRemaining(total.toString());
  };

  useEffect(() => {
    getRemaining();
  }, []);

  return (
    <Wrapper>
      <div className="content">
        <p className="heading">Price per Skelly</p>
        <p className="price">
          <span>0.05</span> ETH Each
        </p>
        <p className="remaining">{10000 - remaining} remaining</p>
      </div>
    </Wrapper>
  );
};

export default MintInfo;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  text-align: center;
  padding: 0 25px;
  color: #fff;

  .content {
    background-color: #9e323d;
    border-radius: 10px;
    padding: 12px;
    .heading {
      font-size: 1.5rem;
    }

    .price {
      font-size: 2.25rem;

      span {
        font-weight: 700;
      }
    }

    .remaining {
      font-size: 1.5rem;
    }
  }
`;
