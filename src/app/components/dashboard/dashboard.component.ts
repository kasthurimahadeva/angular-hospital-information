import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Durdans Hospital PLC';
  address = 'Singapore, 12 Woodbine long named road';
  titleEditing = false;
  addressEditing = false;
  constructor() { }

  ngOnInit() {
  }

  changeTitle(title: String) {
    this.title = title;
    this.titleEditing = false;
  }

  editTitle(): void {
    this.titleEditing = true;
  }

  changeAddress(address: String) {
    this.address = address;
    this.addressEditing = false;
  }

  editAddress(): void {
    this.addressEditing = true;
  }
}
