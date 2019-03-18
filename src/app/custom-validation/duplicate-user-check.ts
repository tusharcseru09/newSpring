import { FormControl } from '@angular/forms';

export class UniqueUsername {

    static userList: string[] = ['abu.siddiqeu','tresiddiab','islamtu','siddiqueab','tushar.cseru','tushar.cseru09'];

    static isUserExist(username: string ) : boolean {
        if (UniqueUsername.userList.includes(username) ) return true;
        else return false;
    }
    
    static validUserName(fc: FormControl) {
        if ( UniqueUsername.isUserExist( fc.value.toLowerCase() ) ) {
            return ({validUsername: true});
        } else {
            (null);
        }
    }
}