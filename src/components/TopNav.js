import React from "react"
import {
  Container,
  Button,
  Image,
  Menu,
  Dropdown,
  Icon
} from "semantic-ui-react"

class TopNav extends React.Component {
  render() {
    return (
      <Menu fixed="top" inverted>
        <Container fluid>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              src="https://assets.ifttt.com/images/channels/68/icons/large.png"
              style={{ marginRight: "1.5em" }}
            />
            Procurement System
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
          <Dropdown item simple text="Requisition">
            <Dropdown.Menu>
              <Dropdown.Item as="a">Create PR</Dropdown.Item>
              <Dropdown.Item as="a">View History</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item simple text="Order">
            <Dropdown.Menu>
              <Dropdown.Item as="a">MP2</Dropdown.Item>
              <Dropdown.Item as="a">MAX</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button color="red" as="a">
                <Button.Content visible>
                  <Icon name="sign out" /> Sign Out
                </Button.Content>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default TopNav
