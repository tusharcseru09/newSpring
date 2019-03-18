import { Component, OnInit } from '@angular/core';
import { RegFrmValidation } from '../control-err-msg/frmError.Interface';
import { FormErrors } from '../control-err-msg/frmErrors';
import { UniqueUsername } from '../custom-validation/duplicate-user-check';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 

  isUnique: boolean = false;
  userInput: string;
  

  userDataSource: UniqueUsername = new UniqueUsername();

  constructor() { }

  ngOnInit() {
    this.userInput = '';
   }

  OnClick(str: string) {
    console.log('OnClick :-');

    //console.log(this.userDataSource.isUserExist(str));

    let regFrmValidation: RegFrmValidation = FormErrors.regFrmValidationErrs;

    for (let errs of regFrmValidation.username ) {
      console.log(errs.type + "~~ " + errs.message);
    }

  }

 

}
