import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.css']
})
export class ContactsFormComponent implements OnInit {

  contactsForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      fax: ['', Validators.required],
      url: ['', Validators.required],
      highlight1: ['', [Validators.required, Validators.maxLength(100)]],
      highlight2: ['', [Validators.required, Validators.maxLength(100)]],
      highlight3: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactsForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactsForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactsForm.value));
  }
}
