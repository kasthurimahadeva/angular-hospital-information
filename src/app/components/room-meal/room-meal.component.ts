import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-room-meal',
  templateUrl: './room-meal.component.html',
  styleUrls: ['./room-meal.component.css']
})
export class RoomMealComponent implements OnInit {
   roomMealForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.roomMealForm = this._fb.group({
      roomTypes: this._fb.array([this.initRoomTypes()]),
      mealTypes: this._fb.array([this.initMealType()])
    });
  }

  get formRoomArr() {
    return this.roomMealForm.get('roomTypes') as FormArray;
  }

  get formMealArr() {
    return this.roomMealForm.get('mealTypes') as FormArray;
  }

  initRoomTypes() {
    return this._fb.group({
      // list all your form controls here, which belongs to your form array
      room: [''],
      price: ['']
    });
  }

  initMealType() {
    return this._fb.group({
      // list all your form controls here, which belongs to your form array
      meal: [''],
    });
  }

  addNewRoomType() {
    this.formRoomArr.push(this.initRoomTypes());
  }

  deleteRoomType(index: number) {
    this.formRoomArr.removeAt(index);
  }

  addNewMealType() {
    this.formMealArr.push(this.initMealType());
  }

  deleteMealType(index: number) {
    this.formMealArr.removeAt(index);
  }
}
