import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-frmgrp',
  templateUrl: './frmgrp.component.html',
  styleUrls: ['./frmgrp.component.css']
})
export class FrmgrpComponent implements OnInit {

  foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];

  disableSelect = new FormControl(false);

  exmFrmGrp = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    gender: new FormControl(''),
    fevFood: new FormControl('')
    });
  user_data: FormArray;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.exmFrmGrp.value);
  }

}



