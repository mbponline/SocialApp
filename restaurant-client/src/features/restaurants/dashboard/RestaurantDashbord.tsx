import React from 'react'
import { Grid, GridColumn, List } from 'semantic-ui-react'
import { IRestaurant } from '../../../app/models/restaurant'
import RestaurantList from './RestaurantList'
import RestaurantDetails from '../details/RestaurantDetails'
import RestaurantForm from '../form/RestaurantForm'

interface IProps {
    restaurants: IRestaurant[];
    selectRestaurant: (id: string) => void;
    selectedRestaurant: IRestaurant;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedRestaurant: (restaurant: IRestaurant | null) => void;
    createRestaurant: (restaurant: IRestaurant) => void;
    editRestaurant: (restaurant: IRestaurant) => void;
    deleteRestaurant: (id: string) => void;
}

const RestaurantDashbord: React.FC<IProps> = ({restaurants, selectRestaurant, selectedRestaurant, editMode, setEditMode, setSelectedRestaurant, createRestaurant, editRestaurant, deleteRestaurant}) => {
    return (
        <Grid>
            <GridColumn width={10}>
               <RestaurantList restaurants={restaurants} selectRestaurant={selectRestaurant} deleteRestaurant={deleteRestaurant} />               
            </GridColumn>
            <GridColumn width={6}>
                {selectedRestaurant && !editMode &&
                <RestaurantDetails restaurant={selectedRestaurant} setEditMode={setEditMode} setSelectedRestaurant={setSelectedRestaurant} />}
                {editMode && <RestaurantForm key={selectedRestaurant && selectedRestaurant.id || 0} setEditMode={setEditMode} restaurant={selectedRestaurant!} createRestaurant={createRestaurant} editRestaurant={editRestaurant} />}           
            </GridColumn>
        </Grid>
    )
}

export default RestaurantDashbord
