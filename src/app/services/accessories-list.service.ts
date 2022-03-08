import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccessoriesList } from '../accessorizes/accessorize-list/accessoriesList.model';
import { accessoriesList } from '../accessorizes/mock-accessories';
import { exhaust, exhaustMap, map, take } from 'rxjs/operators';
import { AccessoriesModel } from '../accessorizes/accessorize-list/accessories.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesListService {
  accessories: AccessoriesList[];
  selectedAccessory: AccessoriesList;
  aksesuar: AccessoriesModel;

  constructor(private http: HttpClient, private authService: AuthService) { }


  getAccessories2() {
    return this.http.get<{ [key: string]: AccessoriesModel }>('https://iphone-fc8ff-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postArray: AccessoriesModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          console.log(postArray);
          return postArray;

        })
      )
  }

  addAccessory(name: string, image: any, price: number): Observable<AccessoriesModel> {
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      const postData: AccessoriesModel = { name: name, image: image, price: price };
      return this.http.post<{ name: string }>('https://iphone-fc8ff-default-rtdb.firebaseio.com/posts.json?auth=' + user?.token, postData)
    }), map(responseData => {
      const postData: AccessoriesModel = { name: name, image: image, price: price };
      postData.id = responseData.name;
      console.log(postData);
      return postData;

    }));

    //.pipe(   )
    //.subscribe(responseData => { console.log(responseData); });
  }

  deleteAccessory(b: any): Observable<any> {

    const url = `https://iphone-fc8ff-default-rtdb.firebaseio.com/posts/${b}/.json?auth=`;

    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return (
        this.http.delete
          (url + user?.token,
        ).pipe(
          map(resp => { return b })

        )
      )
    }))
  }

  /*
  deleteAccessory(b: any): void {
    this.http.delete(`https://iphone-fc8ff-default-rtdb.firebaseio.com/posts/${b}/.json`, b)
      .subscribe(responseData => { console.log(responseData); });

  }*/

  /*
  updateAccessory(accessory: AccessoriesList, form: any, b: any) {
    this.http.patch(`https://iphone-fc8ff-default-rtdb.firebaseio.com/posts/${b}/.json`, form.value)
      .subscribe(responseData => { console.log(responseData); });

  }*/

  updateAccessory(accessory: AccessoriesList, form: any, b: any): Observable<any> {

    const url = `https://iphone-fc8ff-default-rtdb.firebaseio.com/posts/${b}/.json?auth=`;

    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return (
        this.http.patch
          (url + user?.token, form.value
        ).pipe(
          map(resp => { return b })

        )
      )
    }))
  }

}
