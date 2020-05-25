import React from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import CustomTab from '../CustomTab'
import Form from './Form'
import Table from './Table'

import './styles.css';

const Information = () => (
  <div>
    <Tabs activeTab='form'>
      <TabList >
        <Tab component={CustomTab} label='Form' id='form' />
        <Tab component={CustomTab} label='Table' id='table' />
      </TabList>
      <TabList>
        <TabPanel component={Form} id='form' />
        <TabPanel component={Table} id='table' />
     
      </TabList>
    </Tabs>
  </div>
)

export default Information