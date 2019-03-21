import { FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class ValidationMethods {

    static userList: string[] = ['abu.siddiqeu','tresiddiab','islamtu','siddiqueab','tushar.cseru','tushar.cseru09'];

    static isUserExist(username: string ) : boolean {
        if (ValidationMethods.userList.includes(username) ) return true;
        else return false;
    }
    
    static validUserName1(fc: FormControl) {
        if ( ValidationMethods.isUserExist( fc.value.toLowerCase() ) ) {
            return ({validUsername: true});
        } else {
            (null);
        }
    }

    static validUserName(arg1: string, arg2: string) : ValidatorFn 
    {
        return( control: FormControl) : ValidationErrors | null => 
        {
            const tmpValue = control.value.toLowerCase() ;
            if ( ValidationMethods.isUserExist(tmpValue) ) 
                return ({validUserName: true});
            else 
                return null; 
        }
    }






    
}