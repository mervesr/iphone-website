import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccessoriesListService } from 'src/app/services/accessories-list.service';
import { AccessoriesModel } from './accessories.model';
import { AccessoriesList } from './accessoriesList.model';

@Component({
  selector: 'accessorize-list',
  templateUrl: './accessorize-list.component.html',
  styleUrls: ['./accessorize-list.component.css']
})
export class AccessorizeListComponent implements OnInit {

  @Input() accessory: AccessoriesList[];
  selectedAccessory: AccessoriesModel;

  accessories: AccessoriesList[];
  backendAccessories: AccessoriesModel[];

  accessoriesForm = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
  });

  constructor(private accessoriesService: AccessoriesListService) { }

  ngOnInit(): void {
    this.getAccessories2();
  }

  onSelect(accessory: AccessoriesModel): void {
    this.selectedAccessory = accessory;
    console.log(this.selectedAccessory);
  }


  getAccessories2(): void {
    this.accessoriesService.getAccessories2().
      subscribe(posts => {
        this.backendAccessories = posts
      });
  }

  AddItem2(form: any) {
    console.log("form", form.value.name);
    this.accessoriesService.addAccessory(form.value.name, form.value.image, form.value.price)
      .subscribe(accessory => this.backendAccessories.push(accessory));
  }


  DeleteAccessory(a: any, b: any) {
    console.log("id", b);
    console.log( "a", a);
    this.accessoriesService.deleteAccessory(b).subscribe(accessory => {
      this.backendAccessories.forEach((value, index) => {
        if (value.id === b) this.backendAccessories.splice(index, 1);
      });
    });
    
  }
 

  UpdateItem(accessory: AccessoriesList, form: any, b: any): void {
    /*  this.selectedAccessory = accessory;
    this.accessories.forEach((value, index) => {
      if (value.name === b) this.accessories = form.value;
    }); */
    this.accessoriesService.updateAccessory(accessory, form, b).subscribe(res => this.backendAccessories = res);
  }
}
