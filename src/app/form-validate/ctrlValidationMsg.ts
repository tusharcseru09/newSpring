import { CtrlErrMsg } from './ctrlErrMsg.interface';

export class CtrlValidationMsg {

    public static username: CtrlErrMsg[] = [
        { errType: 'required', errMsg: 'Username is required.' },
        { errType: 'minlength', errMsg: 'Username must be at least 5 characters long.' },
        { errType: 'maxlength', errMsg: 'Username cannot be more than 25 characters long.' },
        { errType: 'pattern', errMsg: 'Your username must contain only numbers and letters.' },
        { errType: 'validUserName', errMsg: 'Your username has already been taken.' }
    ];

    public static email: CtrlErrMsg[] = [
        { errType: 'required', errMsg: 'Email is required.' },
        //{ errType: 'email', errMsg: 'Enter a valid email.' },
        { errType: 'pattern', errMsg: 'Enter a valid email.' },
    ];

    public static password: CtrlErrMsg[] = [
        { errType: 'required', errMsg: 'Password is required.' },
        { errType: 'minlength', errMsg: 'Password must be at least 8 characters long.' },
        { errType: 'pattern', errMsg: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ];

    public static confirmPassword: CtrlErrMsg[] = [
        { errType: 'required', errMsg: 'Confirm password is required.' },
        { errType: 'notequal', errMsg: 'Password mismatch.' }
    ];

    public static terms: CtrlErrMsg[] = [
        { errType: 'pattern', errMsg: 'You must accept terms and conditions.' }
    ];

}
