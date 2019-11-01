import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { IRestaurant } from '../models/restaurant';
import NavBar from '../../features/nav/NavBar';
import RestaurantDashbord from '../../features/restaurants/dashboard/RestaurantDashbord';
import agent from '../api/agent';



const App = () =>{
  //state and function - inital state
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<IRestaurant | null>();
  const [editMode, setEditMode] = useState(false);


  const handleSelectRestaurant = (id: string) => {
    setSelectedRestaurant(restaurants.filter(r => r.id === id)[0])
    setEditMode(false);
  };

  const handleOpenCreateForm = () => {
    setSelectedRestaurant(null);
    setEditMode(true);
    }

    const handleCreateRestaurant = (restaurant: IRestaurant) =>{
      agent.Restaurants.create(restaurant).then(() => {
        setRestaurants([...restaurants, restaurant]);
        setSelectedRestaurant(restaurant);
        setEditMode(false);
      })
    }

    const handleEditRestaurant = (restaurant: IRestaurant) =>{
      agent.Restaurants.update(restaurant).then(() => {
        setRestaurants([...restaurants.filter(r => r.id !== restaurant.id), restaurant]);
        setSelectedRestaurant(restaurant);
        setEditMode(false);    
      })
    }

    const handleDeleteRestaurant = (id: string) => {
      agent.Restaurants.delete(id).then(() => {
        setRestaurants([...restaurants.filter(r => r.id !== id)])
      })
    }

  //This implementation of useEffect hook is the equivalent of a ComponentDidMount-method
  useEffect(() => {
    agent.Restaurants.list()
    .then((response) => {
      let restaurants: IRestaurant[] = [];
      response.forEach((restaurant:any) =>{
        restaurants.push(restaurant);
      })
        
          //updates state and causes a render which gets data from our api
      setRestaurants(restaurants);
    });
  }, []);

  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm}/>
      <Container style={{marginTop: '7em'}}>
        <RestaurantDashbord restaurants={restaurants} 
        selectRestaurant={handleSelectRestaurant}
        selectedRestaurant={selectedRestaurant!}
        editMode={editMode}
        setEditMode={setEditMode}
        setSelectedRestaurant={setSelectedRestaurant}
        createRestaurant={handleCreateRestaurant}
        editRestaurant={handleEditRestaurant}
        deleteRestaurant={handleDeleteRestaurant}
         />
    </Container>
    </Fragment>
  ); 
}


export default App;
