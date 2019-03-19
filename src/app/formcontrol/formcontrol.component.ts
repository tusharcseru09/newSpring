import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegFrmValidation } from '../control-err-msg/frmError.Interface';
import { FormErrors } from '../control-err-msg/frmErrors';
import { UniqueUsername } from '../custom-validation/duplicate-user-check';


@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {


  regFrmValidation: RegFrmValidation = FormErrors.regFrmValidationErrs;

  exmFrmGrp = new FormGroup({
    username: new FormControl( '', Validators.compose([
      UniqueUsername.validUserName('username','validUserName'),
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(5)
    ]) )
    });

  constructor() {}

  ngOnInit() {
  }


  OnClick() {
    console.log('OnClick :-');
    let regFrmValidation: RegFrmValidation = FormErrors.regFrmValidationErrs;
    for (let errs of regFrmValidation.username ) {
      console.log(errs.type + "~~ " + errs.message);
    }
  }
}
