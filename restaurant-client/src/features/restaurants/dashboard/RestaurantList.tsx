import React from 'react'
import { Item, Button, Label, Segment } from 'semantic-ui-react'
import { IRestaurant } from '../../../app/models/restaurant';

interface IProps {
    restaurants: IRestaurant[];
    selectRestaurant: (id: string) => void;
    deleteRestaurant: (id: string) => void;
}

const RestaurantList: React.FC<IProps> = ({restaurants, selectRestaurant, deleteRestaurant}) => {
    return (
        <Segment clearing>
        <Item.Group divided>
            {restaurants.map(restaurant => (
                <Item key={restaurant.id}>
            <Item.Content>
                <Item.Header as='a'>{restaurant.name}</Item.Header>
                <Item.Meta>{restaurant.phone}</Item.Meta>
                <Item.Description>
                    <div>{restaurant.url}</div>
                    <div>{restaurant.address}</div>
                    <div>{restaurant.description}</div>  
                    <div>{restaurant.ubahnStation}</div>                  
                </Item.Description>
                <Item.Extra>
                    <Button onClick={() => selectRestaurant(restaurant.id)} floated='right' content='View' color='purple' />
                    <Button onClick={() => deleteRestaurant(restaurant.id)} floated='right' content='Delete' color='red' />
                </Item.Extra>
            </Item.Content>
        </Item>
            ))}
        
        </Item.Group>
        </Segment>

    );
};

export default RestaurantList;