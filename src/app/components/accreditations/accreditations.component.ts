import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accreditations',
  templateUrl: './accreditations.component.html',
  styleUrls: ['./accreditations.component.css']
})
export class AccreditationsComponent implements OnInit {

  adding = false;
  accreditations = ['Name of the accreditation', 'Long name of the accreditation that takes several strokes',
    'Long name of the accreditation', 'Name of the accreditation Accreditation on moderation',
    'Name of the accreditation', 'Long name of the accreditation'];
  constructor() { }

  ngOnInit() {
  }

  removeAccreditation(i: number): void {
    this.accreditations.splice(i, 1);
  }

  addAccreditation(): void {
    this.adding = true;
  }

  add(accreditation: String) {
    this.accreditations.push(accreditation);
    this.adding = false;
  }
}
