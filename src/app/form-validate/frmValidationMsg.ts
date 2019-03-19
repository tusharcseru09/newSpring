import { RegFrmErr } from './frmErrMsg.interface';
import { CtrlValidationMsg } from './ctrlValidationMsg';

export class FrmValidationMsg {

    public static regFrmValidationMsg: RegFrmErr = {
      username: CtrlValidationMsg.username,
      email: CtrlValidationMsg.email,
      password: CtrlValidationMsg.password,
      confirmPassword: CtrlValidationMsg.confirmPassword,
      terms: CtrlValidationMsg.terms
    }
  
  }