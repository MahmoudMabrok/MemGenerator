import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames'

import { OneImageMem } from './components/../OneImageMem';
import { TwoImageMem } from './components/../TwoImageMeme';

const Meme = (props) => {
    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              One Image Mem
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Two Image Mem
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
          <Row>
            <OneImageMem />
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Row>
            <TwoImageMem />
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }

  export default Meme ; 