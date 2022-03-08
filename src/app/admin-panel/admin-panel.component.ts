import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AccessoriesModel } from '../accessorizes/accessorize-list/accessories.model';
import { AccessoriesList } from '../accessorizes/accessorize-list/accessoriesList.model';
import { IphoneList } from '../iphone/iphone-list/iphoneList.model';
import { AccessoriesListService } from '../services/accessories-list.service';
import { IphoneService } from '../services/iphone-service.service';


@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  @Input() iphone: IphoneList[];
  @Input() accessory: AccessoriesList[];
  selectedIphone: IphoneList;
  selectedAccessory: AccessoriesList;

  iphones: IphoneList[];
  accessories: AccessoriesList[];
  offer: any;
  indirim: any;
  backendAccessories: AccessoriesModel[];
  
  constructor(private iphoneService: IphoneService, private accessoryService: AccessoriesListService) { }
  
  ngOnInit(): void {
    this.getIphones();
    this.getAccessories2();
  }

  getAccessories2(): void {
    this.accessoryService.getAccessories2().
      subscribe(posts => {
        this.backendAccessories = posts
      });
  }

  onSelect(iphone: IphoneList): void {
    this.selectedIphone = iphone;
    console.log(this.selectedIphone);
  }

  onSelectAccessory(accessory: AccessoriesList): void {
    this.selectedAccessory = accessory;
    console.log(this.selectedAccessory);
  }

  getIphones(): void {
    this.iphoneService.getIphones()
      .subscribe(iphones => this.iphones = iphones);
  }



  calculate(iphone: IphoneList, accessory: AccessoriesList): void {
    this.selectedIphone = iphone;
    this.selectedAccessory = accessory;
    this.indirim = ((accessory.price/100)*10);
    this.offer = iphone.price + ((accessory.price/100)*90)
    console.log(accessory.price);
    console.log(this.indirim);
  }
}
