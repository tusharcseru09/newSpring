import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UniqueUsername } from '../custom-validation/duplicate-user-check';
import { RegFrmErr } from '../form-validate/frmErrMsg.interface';
import { FrmValidationMsg } from '../form-validate/frmValidationMsg';


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
      UniqueUsername.validUserName('username','validUserName'),
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(5)
    ])),

    email: new FormControl('',Validators.compose([
      Validators.required,
      Validators.email
    ])),
  
    password: new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(8)
    ])),

    confirmPassword: new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(8)
    ])),

    });

  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.exmFrmGrp.value);
  }
}
