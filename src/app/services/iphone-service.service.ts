import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IphoneList } from '../iphone/iphone-list/iphoneList.model';
import { iphoneList } from '../iphone/mock-iphone';

@Injectable({
  providedIn: 'root'
})
export class IphoneService {

  selectedIphone: IphoneList;

  iphones: IphoneList[];

  constructor() { }

  getIphones(): Observable<IphoneList[]> {
    return of(iphoneList);
  }

  addItem(value: any): Observable<IphoneList[]> {
    iphoneList.push(value);
    return of(iphoneList);
  }

  deleteItem(b: any): Observable<IphoneList[]> {
    iphoneList.forEach((value, index) => {
      if (value.name === b) iphoneList.splice(index, 1);
    });

    return of(iphoneList);
  }

  updateItem(iphone: IphoneList, form: any, b: any): Observable<IphoneList[]> {
    this.selectedIphone = iphone;
    iphoneList.forEach((value, index) => {
      if (value.name === b) this.iphones = form.value;
    });
    return of(iphoneList);
  }
}
