import { ErrMsgInf } from './errMsg.Interface';

export class ControlErrors {

    public static username: ErrMsgInf[] = [
        { type: 'required', message: 'Username is required' },
        { type: 'minlength', message: 'Username must be at least 5 characters long' },
        { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
        { type: 'pattern', message: 'Your username must contain only numbers and letters' },
        { type: 'validUsername', message: 'Your username has already been taken' }
    ];

    public static email: ErrMsgInf[] = [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Enter a valid email' }
    ];
    
    public static password: ErrMsgInf[] = [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Password must be at least 5 characters long' },
        { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ];

    public static confirmPassword: ErrMsgInf[] = [
        { type: 'required', message: 'Confirm password is required' },
        { type: 'areEqual', message: 'Password mismatch' }
    ];

    public static terms: ErrMsgInf[] = [
        { type: 'pattern', message: 'You must accept terms and conditions' }
    ];

}