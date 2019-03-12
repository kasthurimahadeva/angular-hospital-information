import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-photos',
  templateUrl: './hospital-photos.component.html',
  styleUrls: ['./hospital-photos.component.css']
})
export class HospitalPhotosComponent implements OnInit {

  photos = [1, 2, 4, 6, 5, 3, 5, 1];
  constructor() { }

  ngOnInit() {
  }

  removeImage(i: number) {
    this.photos.splice(i, 1);
  }
}
