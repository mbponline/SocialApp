import axios, { AxiosResponse } from 'axios';
import { IRestaurant } from '../models/restaurant';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
}

const Restaurants = {
 list: (): Promise<IRestaurant []> => requests.get('/restaurants'),
 details: (id: string) => requests.get(`/restaurants/${id}`),
 create: (restaurant: IRestaurant) => requests.post('/restaurants', restaurant),
 update: (restaurant: IRestaurant) => requests.put(`/restaurants/${restaurant.id}`,restaurant),
 delete: (id: string) => requests.del(`/restaurants/${id}`)
}

export default {
    Restaurants
}