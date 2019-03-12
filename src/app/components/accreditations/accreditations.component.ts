import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accreditations',
  templateUrl: './accreditations.component.html',
  styleUrls: ['./accreditations.component.css']
})
export class AccreditationsComponent implements OnInit {

  accreditations = [1, 2, 3, 4, 5, 6];
  constructor() { }

  ngOnInit() {
  }

  removeAccreditation(i: number): void {
    this.accreditations.splice(i, 1);
  }

  addAccreditation(): void {
    this.accreditations.push(1);
  }
}
