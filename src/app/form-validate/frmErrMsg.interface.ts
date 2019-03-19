import { CtrlErrMsg } from './ctrlErrMsg.interface';

export interface RegFrmErr {
    username: CtrlErrMsg[];
    email: CtrlErrMsg[];
    password: CtrlErrMsg[];
    confirmPassword: CtrlErrMsg[];
    terms: CtrlErrMsg[];
}
