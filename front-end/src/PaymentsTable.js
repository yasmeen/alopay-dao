import React from 'react'
import { Table } from 'semantic-ui-react'

const PaymentsTable = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Note</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>07/01/22</Table.Cell>
        <Table.Cell>alice</Table.Cell>
        <Table.Cell>2,413,938,974,193</Table.Cell>
        <Table.Cell>6 hours worked • hackathon planning</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>07/08/22</Table.Cell>
        <Table.Cell>dave</Table.Cell>
        <Table.Cell>3,120,736,156,613</Table.Cell>
        <Table.Cell>8 hours worked • building website</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>07/10/22</Table.Cell>
        <Table.Cell>charlie</Table.Cell>
        <Table.Cell>1,532,192,124,234</Table.Cell>
        <Table.Cell>3 hours worked • social media</Table.Cell>
      </Table.Row>
    </Table.Body>

    {/* <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer> */}
  </Table>
)

export default PaymentsTable