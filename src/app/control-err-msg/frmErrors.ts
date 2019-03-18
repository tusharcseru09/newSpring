import { RegFrmValidation } from './frmError.Interface';
import { ControlErrors } from './ctrtErrors';


export class FormErrors {

  public static regFrmValidationErrs: RegFrmValidation = {
    username: ControlErrors.username,
    email: ControlErrors.email,
    password: ControlErrors.password,
    confirmPassword: ControlErrors.confirmPassword,
    terms: ControlErrors.terms
  }

}