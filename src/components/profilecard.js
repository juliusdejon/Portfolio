import React, { Component } from 'react';
import { Layout, Card } from 'antd';
import styled from 'styled-components';

import avatar from '../images/me.png';

class ProfileCard extends Component {
  render() {
  	const StyledLayout = styled(Layout)`
	.card {
	    font-family: 'Roboto';
	    font-weight:800;
	    text-align:center;
	}
	.ant-card-body {
	    padding: 8px;
	}
	.wrapper {
	    border: #424242 2px;
	}
	.avatar {
		height: 200px;
		width: 200px;
	}
	background: #FAFAFA;
	display:flex;

  	`;

    return (
    <StyledLayout>
  <div className="wrapper">
  <Card
    cover={<img alt="example" className="avatar" src={avatar}/>}
    className="card"
  >
  <div className="card-container">
  <div>Julius M. Dejon</div>
  <div>Full Stack Web Developer</div>
    </div>
  </Card>
    </div>
    </StyledLayout>
    );
  }
}

export default ProfileCard;

