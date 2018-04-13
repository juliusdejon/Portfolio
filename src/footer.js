import React, { Component } from 'react';
import { BackTop, Icon } from 'antd';
import styled from 'styled-components';
const StyledDiv =  styled.div`

  position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 20px;
    background-color: #303030;
    color: #FAFAFA;
    text-align: center;
    font-family: 'Roboto';
`;

class Footer extends Component {
  render() {
    return (
    <div>
    <StyledDiv className="footer">
    All rights Reserved<Icon type="copyright" /> 2018
	</StyledDiv>
    <BackTop />
    </div>
    );
  }
}

export default Footer;
