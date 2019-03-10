import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.css']
})
export class ContactsFormComponent implements OnInit {

  contactsForm: FormGroup;
  currencies = ['$ dollars US', 'LKR Rupees SL'];
  contactNumbers  = 2;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      fax: [''],
      website: ['', Validators.required],
      highlight1: ['', [Validators.required, Validators.maxLength(100)]],
      highlight2: ['', [Validators.maxLength(100)]],
      highlight3: ['', [Validators.maxLength(100)]],
      description: ['', Validators.maxLength(300)],
      currency: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(JSON.stringify(this.contactsForm.value));
  }

  addContactNumber() {
    const control = <FormArray>this.contactsForm.controls['contactNumber'];
  }

  removeContactNumber(i: number) {
    const control = <FormArray>this.contactsForm.controls['contactNumber'];
    control.removeAt(i);
  }
}
