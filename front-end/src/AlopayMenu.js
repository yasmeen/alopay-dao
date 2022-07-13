import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';

export default class AlopayMenu extends Component {
  state = { activeItem: 'hours' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing>
        <Menu.Item
          name='hours'
          active={activeItem === 'hours'}
          onClick={this.handleItemClick}
          // as={Link}
          to='/hours'
        />
        <Menu.Item
          name='payments'
          active={activeItem === 'payments'}
          onClick={this.handleItemClick}
          // as={Link}
          to='/payments'
        />
        <Menu.Item
          name='members'
          active={activeItem === 'members'}
          onClick={this.handleItemClick}
          // as={Link}
          to='/members'
        />
      </Menu>
    )
  }
}