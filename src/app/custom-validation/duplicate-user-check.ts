import { FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class UniqueUsername {

    static userList: string[] = ['abu.siddiqeu','tresiddiab','islamtu','siddiqueab','tushar.cseru','tushar.cseru09'];

    static isUserExist(username: string ) : boolean {
        if (UniqueUsername.userList.includes(username) ) return true;
        else return false;
    }
    
    static validUserName1(fc: FormControl) {
        if ( UniqueUsername.isUserExist( fc.value.toLowerCase() ) ) {
            return ({validUsername: true});
        } else {
            (null);
        }
    }
    static validUserName(arg1: string, arg2: string) : ValidatorFn 
    {

        return( control: FormControl) : ValidationErrors | null => {
            const abc = control.value.toLowerCase() ;//.get(arg1);

            if ( UniqueUsername.isUserExist( abc) ) {
                return ({validUserName: true});
            } else {
                (null);
            }
        }
    }

}