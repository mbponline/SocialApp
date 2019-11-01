import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { IRestaurant } from '../../../app/models/restaurant'


interface IProps {
    restaurant: IRestaurant;
    setEditMode: (editMode: boolean) => void;
    setSelectedRestaurant: (restaurant: IRestaurant | null) => void;
}
const RestaurantDetails: React.FC<IProps> = ({restaurant, setEditMode, setSelectedRestaurant}) => {
    return (
        <Card>
        <Image src={`/assets/placeholder.png`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{restaurant.name}</Card.Header>
          <Card.Meta>
            <span>{restaurant.phone}</span>
          </Card.Meta>
          <Card.Description>
            {restaurant.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group widths={2}>
                <Button onClick={() => setEditMode(true)} basic color='purple' content='Edit' />
                <Button onClick={() => setSelectedRestaurant(null)} basic color='grey' content='Cancel' />
            </Button.Group>
        </Card.Content>
      </Card>
    )
}

export default RestaurantDetails
