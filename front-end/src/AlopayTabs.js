import React from 'react'
import { Tab } from 'semantic-ui-react'
import Hours from './Hours'
import Members from './Members'
import Payments from './Payments'

const panes = [
  {
    menuItem: 'Hours',
    render: () => <Tab.Pane attached={false}><Hours></Hours></Tab.Pane>,
  },
  {
    menuItem: 'Payments',
    render: () => <Tab.Pane attached={false}><Payments></Payments></Tab.Pane>,
  },
  {
    menuItem: 'Members',
    render: () => <Tab.Pane attached={false}><Members></Members></Tab.Pane>,
  },
]

const TabExamplePointing = () => <Tab menu={{ pointing: true }} panes={panes} />

export default TabExamplePointing