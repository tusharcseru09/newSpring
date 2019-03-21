import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { RegFrmErr } from '../form-validate/frmErrMsg.interface';
import { FrmValidationMsg } from '../form-validate/frmValidationMsg';
import { ValidationMethods } from '../form-validate/validationMethod';


@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {

  hidePass = true;
  hideCPass = true;

  regFrmValidation: RegFrmErr = FrmValidationMsg.regFrmValidationMsg;
  
  exmFrmGrp = new FormGroup({
    username: new FormControl( '', Validators.compose([
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(5),
      Validators.pattern('^[a-zA-Z0-9]+$'),
      ValidationMethods.validUserName('valArg1','valArg2'),

    ])),

    email: new FormControl('',Validators.compose([
      Validators.required,
      //Validators.email,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
  
    password: new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(8)
    ])),

    confirmPassword: new FormControl('',Validators.compose([
      Validators.required,
    ])),

    });

  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.exmFrmGrp.value);
  }
}
