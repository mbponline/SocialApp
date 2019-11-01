import React, {useState, ChangeEvent, FormEvent} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IRestaurant } from '../../../app/models/restaurant'
import {v4 as uuid} from 'uuid';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    restaurant: IRestaurant;
    createRestaurant: (restaurant: IRestaurant) => void;
    editRestaurant: (restaurant: IRestaurant) => void;
}

const RestaurantForm: React.FC<IProps> = ({setEditMode, restaurant: initialFormState, createRestaurant, editRestaurant}) => {

    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        } else {
            return {
                id: '',
                name: '',
                phone: '',
                url: '',
                address: '',
                ubahnStation: '',
                description: ''
            }
        }
    }

    const [restaurant, setRestaurant] = useState<IRestaurant>(initializeForm);
   
    const handleSubmit = () => {
        if(restaurant.id.length === 0){
            let newRestaurant = {
                ...restaurant,
                id: uuid()
            }
            createRestaurant(newRestaurant);
        }else{
            editRestaurant(restaurant);
        }
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        setRestaurant({...restaurant, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name='name' placeholder='Name' value={restaurant.name} />
                <Form.Input onChange={handleInputChange} name='phone' placeholder='Phone' value={restaurant.phone} />
                <Form.Input onChange={handleInputChange} name='url' placeholder='Url' value={restaurant.url} />
                <Form.Input onChange={handleInputChange} name='address' placeholder='Address' value={restaurant.address} />
                <Form.Input onChange={handleInputChange} name='ubahnStation' placeholder='U-Bahn Station' value={restaurant.ubahnStation} />
                <Form.Input onChange={handleInputChange} name='description' placeholder='Description' value={restaurant.description} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default RestaurantForm
