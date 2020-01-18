import React from 'react'
import localization from "../../localization"
import styled from 'styled-components';
import AddPicture from "../../assets/images/add.jpg";

const Wrapper = styled('div')`
  position: relative;
  display: block;
  width: calc(100vw - 100px);
  height: 100%;
  margin:0;
  padding: 0;
  div {
    position: relative;
    width: calc(100% - 80px);
    height: calc(100vh - 80px);
    margin: 40px;
    border-radius: 40px;
    overflow: hidden;
  }
  div img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -100;
    
  }
  p {
    margin:0;
    font-size: 100px;
    font-weight: 300;
    position:absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: #fff;
    text-shadow: 1px 1px 10px #000000;
  }

`

const Add = () => {
  return (
    <Wrapper>
      <p>We are still working. Thanks</p>
      <div>
        <img src={AddPicture} alt="add section" />

      </div>
    </Wrapper>
  )
}

export default Add
