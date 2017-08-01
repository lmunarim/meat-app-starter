import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Restaurant} from './restaurant/restaurant.model'
import {ErrorHandler} from '../app.errorHandler'

import {MEAT_API} from '../app.api'

import{MenuItem} from '../restaurant-detail/menu-item/menu-item.model'

@Injectable()

export class RestaurantsService
{
  constructor(private http:Http){}

  restaurants():Observable<Restaurant[]>{
      return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handError)
  }
    restaurantById(id:string):Observable<Restaurant>{
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handError)
    }
    reviewsOfRestaurant(id:string):Observable<any>{
      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handError)
    }

    menuOfRestaurant(id:string) : Observable<MenuItem[]>{
      return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handError)
    }
}
