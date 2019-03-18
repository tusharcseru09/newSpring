import { ErrMsgInf } from './errMsg.Interface';

/**
 * Add different type of form validation error messages in this page
 * by extractng error list from ctrlErrors
 */

export interface RegFrmValidation {
    username: ErrMsgInf[];
    email: ErrMsgInf[];
    password: ErrMsgInf[];
    confirmPassword: ErrMsgInf[];
    terms: ErrMsgInf[];
}