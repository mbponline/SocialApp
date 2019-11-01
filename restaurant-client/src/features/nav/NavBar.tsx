import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

interface IProps {
    openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({openCreateForm}) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/restaurant.png" alt="logo" style={{marginRight: '15px'}}/>
                    RestaurantSearch
                </Menu.Item>
                <Menu.Item name='Restaurant App' />
              <Menu.Item>
                  <Button onClick={openCreateForm} positive content='Register Restaurant' />
              </Menu.Item>
            </Container>
        
      </Menu>
    )
}

export default NavBar
