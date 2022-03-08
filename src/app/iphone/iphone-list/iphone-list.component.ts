import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IphoneService } from 'src/app/services/iphone-service.service';
import { IphoneList } from './iphoneList.model';

@Component({
  selector: 'iphone-list',
  templateUrl: './iphone-list.component.html',
  styleUrls: ['./iphone-list.component.css']
})
export class IphoneListComponent implements OnInit {
  

  @Input() iphone: IphoneList[];
  selectedIphone: IphoneList;

  iphones: IphoneList[];

  iphoneForm = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    model: new FormControl(''),
    sku: new FormControl(''),
    screensize: new FormControl(''),
    color: new FormControl(''),
  });

  constructor(private iphoneService: IphoneService) { }
  
  ngOnInit(): void {
    this.getIphones();
  }

  onSelect(iphone: IphoneList): void {
    this.selectedIphone = iphone;
    console.log(this.selectedIphone);
  }

  getIphones(): void {
    this.iphoneService.getIphones()
      .subscribe(iphones => this.iphones = iphones);
  }
  AddItem(form: any) {
    this.iphoneService.addItem(form.value);
  }

  DeleteItem(a: any, b: any) {
    this.iphoneService.deleteItem(b);
  }

  UpdateItem(iphone: IphoneList, form: any, b: any) {
    this.iphoneService.updateItem(iphone, form, b);
  }
}
